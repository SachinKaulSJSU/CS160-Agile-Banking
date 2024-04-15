from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.html import escape
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = ['amount', 'type', 'user']

    def create(self, validated_data):
        return Transaction.objects.create(**validated_data)