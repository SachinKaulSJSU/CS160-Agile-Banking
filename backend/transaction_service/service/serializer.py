from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.html import escape
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = ['amount', 'ttype', 'account', 'id', 'receiver', 'timestamp']
        extra_kwargs = {
            'receiver': {'required': False}
        }

    def create(self, validated_data):
        return Transaction.objects.create(**validated_data)