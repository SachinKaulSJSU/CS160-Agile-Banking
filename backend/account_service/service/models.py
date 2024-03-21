from django.db import models
from django.contrib.auth.models import User

class BankAccount(models.Model):
    balance = models.DecimalField(max_digits=65, decimal_places=2, default=0.00)
    status = models.BooleanField(default=True)
    type = models.TextField("Checking", "Savings")
    user = models.ForeignKey(User, on_delete=models.CASCADE)