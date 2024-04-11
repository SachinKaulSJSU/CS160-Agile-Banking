from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, alogin, alogout
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

                # Construct response
                response_data = {
                    'message': 'Login successful',
                }
                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else: 
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#logout
@api_view(['POST'])
def logout(request):
    asyncio.run(alogout(request))
    return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)

