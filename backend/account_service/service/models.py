from django.db import models
from django.contrib.auth.models import User

class BankAccount(models.Model):
    CHECKING = 'Checking'
    SAVINGS = 'Savings'
    ACCOUNT_TYPE_CHOICES = [
        (CHECKING, 'Checking'),
        (SAVINGS, 'Savings'),
    ]
    
    balance = models.DecimalField(max_digits=65, decimal_places=2, default=0.00)
    status = models.BooleanField(default=True)
    type = models.CharField(max_length=8, choices=ACCOUNT_TYPE_CHOICES, default=CHECKING)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

