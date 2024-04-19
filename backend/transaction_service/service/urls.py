from django.urls import path
from .views import deposit, transfer, account_transactions

urlpatterns = [
    path('deposit/', deposit),
    path('transfer/', transfer),
    path('account_transactions/<int:account_id>', account_transactions),
]