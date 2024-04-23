# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User

from ..service.serializer import TransactionSerializer
from .models import BankAccount


# Transaction
@api_view(['POST'])
def transaction(request):
    transSerializer = TransactionSerializer(data=request.data)
    if transSerializer.is_valid():
        amount = transSerializer.validated_data.get('amount')
        

        if amount <= 0:
            return transSerializer.ValidationError({'error': 'Please enter a valid number.'})
        user_id = request.user
        try:
            bank_account = BankAccount.objects.get(user=user_id)
        except BankAccount.DoesNotExist:
            return Response({'error': 'Bank account not found.'}, status=status.HTTP_404_NOT_FOUND)
        bank_account.balance += amount
        bank_account.save
        transSerializer.save() # calls create method in serializer


        return Response({'message': 'Deposit successful. Current balance: ' + bank_account.balance}, status=status.HTTP_201_CREATED)
    return Response(transSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
