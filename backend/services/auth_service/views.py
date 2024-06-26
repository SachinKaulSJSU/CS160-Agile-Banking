from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, alogin, alogout
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
import asyncio

from .serializer import LoginSerializer, RegisterSerializer

# Register
@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        email = serializer.validated_data.get('email')

        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            return Response({'error': 'Username or Email already taken.'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save() # calls create method in serializer
        return Response({'message': 'Registration successful.'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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

# Manager Login
@api_view(['POST'])
def super_login(request):
    serializer = LoginSerializer(data=request.data)
    
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None and user.is_superuser:
            try:
                asyncio.run(alogin(request, user))

                # Construct response for superuser
                response_data = {
                    'message': 'Login successful as superuser',
                }
                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else: 
            return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# logout
@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    asyncio.run(alogout(request))
    return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)

# valid session
@api_view(['GET'])
def valid_session(request):
    if request.user.is_authenticated:
        return Response({'valid': True, 'user': request.user.id}, status=status.HTTP_200_OK)
    else:
        # No sessionid found in cookies
        return Response({'valid': False}, status=status.HTTP_400_BAD_REQUEST)

# valid super user    
@api_view(['GET'])
def valid_manager(request):
    if request.user.is_superuser:
        return Response({'valid': True}, status=status.HTTP_200_OK)
    else:
        return Response({'valid': False}, status=status.HTTP_400_BAD_REQUEST)    
