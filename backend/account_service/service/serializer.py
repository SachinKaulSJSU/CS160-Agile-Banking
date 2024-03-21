from rest_framework import serializers
from django.contrib.auth.models import User 
from models import BankAccount


class BankAccountSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = BankAccount
        fields = ['balance', 'status', 'type', 'user']
        
    def create(self, validated_data):
        return BankAccount(**validated_data)
        