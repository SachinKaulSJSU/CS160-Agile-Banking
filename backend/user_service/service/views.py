from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.models import User

from .serializer import RegisterSerializer


# Register
@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        email = serializer.validated_data.get('email')
        first_name = serializer.validated_data.get('first_name')
        last_name = serializer.validated_data.get('last_name')

        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            return serializer.ValidationError({'error': 'Username or Email already taken.'})
        
        serializer.save() # calls create method in serializer
        return Response({'message': 'Registration successful.'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
