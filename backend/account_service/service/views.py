from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import BankAccountSerializer
from .models import BankAccount


# Create Bank Account
@api_view(['POST'])
def create_account(request):
    serializer = BankAccountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save() 
        return Response({'message': 'Bank account creation successful.'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Change Bank Account Status
@api_view(['POST'])
def account_status(request):
    try:
        bank_account = BankAccount.objects.get(id=request.data.get("account_id"))
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank account not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    bank_account.status = not bank_account.status
    bank_account.save()

    serializer = BankAccountSerializer(bank_account)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Get All Bank Accounts by user:
@api_view(['GET'])
def get_accounts_by_user(request, user_id):
    try:
        bank_accounts = BankAccount.objects.filter(user=user_id)
        serializer = BankAccountSerializer(bank_accounts, many=True)
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank accounts not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response(serializer.data, status=status.HTTP_200_OK)

# Get Bank Account by ID:
@api_view(['GET'])
def get_account_by_id(request, account_id):
    try:
        bank_account = BankAccount.objects.get(pk=account_id)
    except BankAccount.DoesNotExist:
        return Response({'error': 'Unable to retrieve bank account.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = BankAccountSerializer(bank_account)
    return Response(serializer.data, status=status.HTTP_200_OK)
