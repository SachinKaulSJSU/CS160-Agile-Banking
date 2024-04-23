from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.html import escape
from .models import Address


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
    
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street_address', 'city', 'state', 'postal_code']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    address = AddressSerializer(required=False)  # Use the AddressSerializer as a nested serializer

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'address']  # Include the address field

    def validate(self, data):
        # santize for html entities
        data['username'] = escape(data.get('username'))
        data['email'] = escape(data.get('email'))
        data['first_name'] = escape(data.get('first_name'))
        data['last_name'] = escape(data.get('last_name'))
        
        return data    

    def create(self, validated_data):
        address_data = validated_data.pop('address', None)  # Pop the address data from validated_data
        user = User.objects.create_user(**validated_data)
        
        if address_data:
            Address.objects.create(user=user, **address_data)  # Create the address associated with the user
        
        return user