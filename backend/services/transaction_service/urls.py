from django.urls import path
from .views import deposit, transfer, account_transactions, external_payment, recurring_payment, account_recurrings

urlpatterns = [
    path('deposit/', deposit),
    path('transfer/', transfer),
    path('account_transactions/<int:account_id>', account_transactions),
    path('external_payment/', external_payment),
    path('recurring_payment/', recurring_payment),
    path('account_recurrings/<int:account_id>', account_recurrings),
]