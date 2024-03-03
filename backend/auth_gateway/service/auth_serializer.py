from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

# class LoginSerializer(serializers.ModelSerializer):
#     username = serializers.CharField(max_length=50)
#     password = serializers.CharField(write_only=True)