from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User
from django.db import transaction

from .serializer import TransactionSerializer
from service.models import BankAccount, Transaction
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
            serializer = TransactionSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save() 
                return Response({'message': 'Transaction successfully created.'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank account not found.'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def transfer(request):
    try:
        with transaction.atomic():  # Start a database transaction
            sender_id = request.data.get('account')
            receiver_id = request.data.get('receiver')
            amount_str = request.data.get('amount')

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
            sender_data = {'account': sender_id, 'amount': -amount}
            receiver_data = {'account': receiver_id, 'amount': amount}
            sender_serializer = TransactionSerializer(data=sender_data)
            receiver_serializer = TransactionSerializer(data=receiver_data)

            if sender_serializer.is_valid() and receiver_serializer.is_valid():
                sender_serializer.save()
                receiver_serializer.save()
                return Response({'message': 'Transaction successfully created.'}, status=status.HTTP_201_CREATED)
            
            return Response({'error': 'Failed to create transaction.'}, status=status.HTTP_400_BAD_REQUEST)

    except BankAccount.DoesNotExist:
        return Response({'error': 'One or both bank accounts not found.'}, status=status.HTTP_404_NOT_FOUND)    

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