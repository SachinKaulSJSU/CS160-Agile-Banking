from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from account_service.models import BankAccount

class Transaction(models.Model):
    DEPOSIT = 'Deposit'
    WITHDRAWAL = 'Withdrawal'
    PAYMENT = 'Payment'
    TRANSFER = 'Transfer'
    RECCURRING = 'Reccurring'
    TRANSACTION_TYPE_CHOICES = [
        (WITHDRAWAL, 'Withdrawal'),
        (DEPOSIT, 'Deposit'),
        (PAYMENT, 'Payment'),
        (TRANSFER, 'Transfer'),
        (RECCURRING, 'Reccurring')
    ]
    
    amount = models.DecimalField(max_digits=65, decimal_places=2, default=0.00)
    ttype = models.CharField(max_length=10, choices=TRANSACTION_TYPE_CHOICES, default=DEPOSIT)
    account = models.ForeignKey(BankAccount, on_delete=models.CASCADE)
    receiver = models.CharField(max_length=65)
    timestamp = models.DateTimeField(auto_now_add=True)


class RecurringPayment(models.Model):
    amount = models.DecimalField(max_digits=65, decimal_places=2, default=0.00)
    account = models.ForeignKey(BankAccount, on_delete=models.CASCADE)
    receiver = models.CharField(max_length=65)    
    timestamp = models.DateTimeField(auto_now_add=True)

    FREQUENCY_CHOICES = [
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly'),
        ('quarterly', 'Quarterly'),
        ('annually', 'Annually'),
    ]
    frequency = models.CharField(max_length=50, choices=FREQUENCY_CHOICES)

