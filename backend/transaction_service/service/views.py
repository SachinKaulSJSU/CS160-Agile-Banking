from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User
from django.db import transaction

from .serializer import TransactionSerializer
from service.models import BankAccount


# Deposit
@api_view(['POST'])
def deposit(request):
    try:
        with transaction.atomic():  # Start a database transaction
            bank_account = BankAccount.objects.select_for_update().get(id=request.data.get("account"))

            # if amount is negative or 0
            if (request.data.get("amount") <= 0):
                return Response({'message': 'Invalid amount.'}, status=status.HTTP_400_BAD_REQUEST)
            
            # add to account balance
            bank_account.balance += request.data.get("amount")
            bank_account.save()

            serializer = TransactionSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save() 
                return Response({'message': 'Transaction successfully created.'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank account not found.'}, status=status.HTTP_404_NOT_FOUND)
