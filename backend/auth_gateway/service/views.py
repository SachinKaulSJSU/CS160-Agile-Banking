from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, alogin

from .serializer import LoginSerializer


# Login
@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')

        try:
            user = authenticate(request, username=username, password=password)
        except User.DoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    alogin(request, user)
    return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)