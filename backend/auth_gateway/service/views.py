from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, alogin
import asyncio

from .serializer import LoginSerializer


# Login
@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')
        user = authenticate(request, username=username, password=password)


        if user is not None:
            try:
                asyncio.run(alogin(request,user))
                # Session data
                session_key = request.session.session_key
                session_expiry = request.session.get_expiry_date()

                # Construct response
                response_data = {
                    'message': 'Login successful',
                    'session_key': session_key,
                    'session_expiry': session_expiry
                }
                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else: 
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)