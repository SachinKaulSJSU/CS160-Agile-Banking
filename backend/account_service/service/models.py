from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class BankAccount(models.Model):
    balance = models.DecimalField(decimal_places=2)
    status = models.BooleanField(db_default=True)
    type = models.TextChoices("Checking", "Savings")
    user_ID = models.ForeignKey(User, on_delete=models.CASCADE)