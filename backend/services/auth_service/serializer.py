from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.html import escape


# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password']

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']

    def validate(self, data):
        # santize for html entities
        data['username'] = escape(data.get('username'))
        data['password'] = escape(data.get('password'))

        username = data.get('username')
        password = data.get('password')

        return data
    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']

    def validate(self, data):
        # santize for html entities
        data['username'] = escape(data.get('username'))
        data['email'] = escape(data.get('email'))
        data['first_name'] = escape(data.get('first_name'))
        data['last_name'] = escape(data.get('last_name'))
        
        return data    

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user    