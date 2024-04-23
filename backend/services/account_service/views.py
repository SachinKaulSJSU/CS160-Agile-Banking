from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from auth_service.models import Address

from .serializer import BankAccountSerializer
from .models import BankAccount


# Create Bank Account
@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def create_account(request):
    data = request.data
    data['user'] = request.user.id
    serializer = BankAccountSerializer(data=data)
    if serializer.is_valid():
        serializer.save() 
        return Response({'message': 'Bank account creation successful.'}, status=status.HTTP_201_CREATED)
    return Response({'data':{request.data.balance}}, status=status.HTTP_400_BAD_REQUEST)

# Change Bank Account Status
@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
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
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_accounts_by_user(request):
    try:
        bank_accounts = BankAccount.objects.filter(user=request.user.id)
        serializer = BankAccountSerializer(bank_accounts, many=True)
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank accounts not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response(serializer.data, status=status.HTTP_200_OK)

# Get All Bank Accounts by user:
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_accounts_by_username(request, username):
    try:
        # Retrieve the user object based on the provided username
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    try:
        # Retrieve bank accounts associated with the user's ID
        bank_accounts = BankAccount.objects.filter(user=user)
        serializer = BankAccountSerializer(bank_accounts, many=True)
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank accounts not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response(serializer.data, status=status.HTTP_200_OK)

# Get Bank Account by ID:
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_account_by_id(request, account_id):
    try:
        bank_account = BankAccount.objects.get(pk=account_id)
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank account not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = BankAccountSerializer(bank_account)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_user_by_account(request, account_id):
    try:
        bank_account = BankAccount.objects.get(pk=account_id)
    except BankAccount.DoesNotExist:
        return Response({'error': 'Bank account not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    user_id = bank_account.user_id

    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    try:
        address = Address.objects.get(user_id=user_id)
    except Address.DoesNotExist:
        address = None
    
    user_data = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
        'address': {
            'street_address': address.street_address if address else None,
            'city': address.city if address else None,
            'state': address.state if address else None,
            'postal_code': address.postal_code if address else None,
        }
    }
    return Response(user_data, status=status.HTTP_200_OK)
