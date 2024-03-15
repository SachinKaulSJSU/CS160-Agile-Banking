from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from django.utils.html import escape

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def validate(self, data):
        # santize for html entities
        data['username'] = escape(data.get('username'))
        data['email'] = escape(data.get('email'))

        username = data.get('username')
        email = data.get('email')

        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            return serializers.ValidationError({'error': 'Username or Email already taken.'})
        return data    

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user