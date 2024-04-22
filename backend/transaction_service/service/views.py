from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers

from django.contrib.auth.models import User
from django.db import transaction

from .serializer import TransactionSerializer, RecurringPaymentSerializer
from service.models import BankAccount, Transaction, RecurringPayment
from decimal import Decimal


# Deposit
@api_view(['POST'])
def deposit(request):
    try:
        with transaction.atomic():  # Start a database transaction
            account_id = request.data.get('account')
            amount_str = request.data.get('amount')

            # Validate request data
            if account_id is None or amount_str is None:
                return Response({'error': 'Missing account ID or amount.'}, status=status.HTTP_400_BAD_REQUEST)

            # Convert amount string to Decimal
            try:
                amount = Decimal(amount_str)
            except ValueError:
                return Response({'error': 'Invalid amount format.'}, status=status.HTTP_400_BAD_REQUEST)

            # Retrieve bank account
            bank_account = BankAccount.objects.select_for_update().get(id=account_id)

            # Validate amount
            if amount <= Decimal('0'):
                return Response({'error': 'Invalid amount.'}, status=status.HTTP_400_BAD_REQUEST)
            
            # Update account balance
            bank_account.balance += amount
            bank_account.save()

            # Create transaction
            serializer = TransactionSerializer(data={
                'amount': amount,
                'ttype': 'Deposit',
                'account': account_id,
            })
            if serializer.is_valid():
                serializer.save() 
                return Response({'message': 'Transaction successfully created.'}, status=status.HTTP_201_CREATED)
            raise serializers.ValidationError(serializer.errors)
 
    except BankAccount.DoesNotExist:
        raise serializers.ValidationError({'error': 'Bank account not found.'})


# External payment
@api_view(['POST'])
def external_payment(request):
    try:
        with transaction.atomic():  # Start a database transaction
            account_id = request.data.get('account')
            amount_str = request.data.get('amount')
            receiver = request.data.get('receiver')  # New field for external recipient

            # Validate request data
            if account_id is None or amount_str is None or receiver is None:
                return Response({'error': 'Missing account ID, amount, or receiver.'}, status=status.HTTP_400_BAD_REQUEST)

            # Convert amount string to Decimal
            try:
                amount = Decimal(amount_str)
            except ValueError:
                return Response({'error': 'Invalid amount format.'}, status=status.HTTP_400_BAD_REQUEST)

            # Retrieve bank account
            bank_account = BankAccount.objects.select_for_update().get(id=account_id)

            # Validate amount
            if amount <= Decimal('0'):
                return Response({'error': 'Invalid amount.'}, status=status.HTTP_400_BAD_REQUEST)
            
            if amount >= bank_account.balance:
                return Response({'error': 'Insufficient balance.'}, status=status.HTTP_400_BAD_REQUEST)
            
            # Update account balance
            bank_account.balance -= amount  # Assuming it's a payment, so deduct from balance
            bank_account.save()

            # Create transaction
            serializer = TransactionSerializer(data={
                'amount': -amount,
                'ttype': 'Payment',
                'account': account_id,
                'receiver': receiver,  # Include receiver in the transaction
            })
            if serializer.is_valid():
                serializer.save() 
                return Response({'message': 'External payment transaction successfully created.'}, status=status.HTTP_201_CREATED)
            raise serializers.ValidationError(serializer.errors)
 
    except BankAccount.DoesNotExist:
        raise serializers.ValidationError({'error': 'Bank account not found.'})    


# Transfer    
@api_view(['POST'])
def transfer(request):
    try:
        with transaction.atomic():  # Start a database transaction
            sender_id = request.data.get('account')
            receiver_id = request.data.get('receiver')
            amount_str = request.data.get('amount')
            ttype = request.data.get('ttype')

            # Validate request data
            if sender_id is None or receiver_id is None or amount_str is None:
                return Response({'error': 'Missing sender account ID, receiver account ID, or amount.'}, status=status.HTTP_400_BAD_REQUEST)

            # Convert amount string to Decimal
            try:
                amount = Decimal(amount_str)
            except ValueError:
                return Response({'error': 'Invalid amount format.'}, status=status.HTTP_400_BAD_REQUEST)

            # Retrieve sender and receiver bank accounts
            sender_account = BankAccount.objects.select_for_update().get(id=sender_id)
            receiver_account = BankAccount.objects.select_for_update().get(id=receiver_id)

            # Validate amount
            if amount <= Decimal('0'):
                return Response({'error': 'Invalid amount.'}, status=status.HTTP_400_BAD_REQUEST)

            # Check if sender has sufficient balance
            if sender_account.balance < amount:
                return Response({'error': 'Insufficient balance.'}, status=status.HTTP_400_BAD_REQUEST)
            
            # Update sender's and receiver's account balances
            sender_account.balance -= amount
            receiver_account.balance += amount
            sender_account.save()
            receiver_account.save()

            # Create transactions
            sender_data = {'account': sender_id, 'amount': -amount, 'ttype': ttype, 'receiver': receiver_id}
            receiver_data = {'account': receiver_id, 'amount': amount, 'ttype': ttype, 'receiver': sender_id}
            sender_serializer = TransactionSerializer(data=sender_data)
            receiver_serializer = TransactionSerializer(data=receiver_data)

            if sender_serializer.is_valid() and receiver_serializer.is_valid():
                sender_serializer.save()
                receiver_serializer.save()
                return Response({'message': 'Transaction successfully created.'}, status=status.HTTP_201_CREATED)
            raise serializers.ValidationError(serializer.errors)

    except BankAccount.DoesNotExist:
        raise Response({'error': 'One or both bank accounts not found.'}, status=status.HTTP_404_NOT_FOUND)    

# Get all transactions by account
@api_view(['GET'])
def account_transactions(request, account_id):
    try:
        # Retrieve all transactions belonging to the specified account
        transactions = Transaction.objects.filter(account=account_id)
        
        # Serialize the transactions
        serializer = TransactionSerializer(transactions, many=True)
        
        # Return the serialized data
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Create recurring payment    
@api_view(['POST'])
def recurring_payment(request):
    try:
        account_id = request.data.get('account')
        amount_str = request.data.get('amount')
        receiver = request.data.get('receiver') 
        # Validate request data
        if account_id is None or amount_str is None or receiver is None:
            return Response({'error': 'Missing account ID, amount, or receiver.'}, status=status.HTTP_400_BAD_REQUEST)

        # Convert amount string to Decimal
        try:
            amount = Decimal(amount_str)
        except ValueError:
            return Response({'error': 'Invalid amount format.'}, status=status.HTTP_400_BAD_REQUEST)
    
        # Retrieve bank account
        bank_account = BankAccount.objects.get(id=account_id)

        # Validate amount
        if amount <= Decimal('0'):
            return Response({'error': 'Invalid amount.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if amount >= bank_account.balance:
            return Response({'error': 'Insufficient balance.'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = RecurringPaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response({'message': 'External payment transaction successfully created.'}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except BankAccount.DoesNotExist:
        raise serializers.ValidationError({'error': 'Bank account not found.'})

# Get all transactions by account
@api_view(['GET'])
def account_recurrings(request, account_id):
    try:
        # Retrieve all transactions belonging to the specified account
        recurrings = RecurringPayment.objects.filter(account=account_id)
        
        # Serialize the transactions
        serializer = RecurringPaymentSerializer(recurrings, many=True)
        
        # Return the serialized data
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)       