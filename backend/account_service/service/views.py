from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import BankAccountSerializer


# Create Bank Account
@api_view(['POST'])
def create_account(request):
    serializer = BankAccountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save() 
        return Response({'message': 'Bank Account creation successful.'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)