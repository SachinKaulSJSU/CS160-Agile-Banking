from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
    AMOUNT = 'amount'
    DEPOSIT = 'Deposit'
    WITHDRAWL = 'Withdrawl'
    TRANSACTION_TYPE_CHOICES = [
        (WITHDRAWL, 'Withdrawl'),
        (DEPOSIT, 'Deposit'),
    ]
    
    amount = models.DecimalField(max_digits=65, decimal_places=2, default=0.00)
    ttype = models.CharField(max_length=9, choices=TRANSACTION_TYPE_CHOICES, default=WITHDRAWL)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
