from django.urls import path
from .views import register, create_account, account_status, get_accounts_by_user, deposit, transfer, account_transactions, external_payment, get_accounts_by_username

urlpatterns = [
    path('register/', register),
    path('create_account/', create_account),
    path('account_status/', account_status),
    path('get_accounts_by_user/', get_accounts_by_user),
    path('deposit/', deposit),
    path('transfer/', transfer),
    path('external_payment/', external_payment),
    path('get_accounts_by_username/<str:username>', get_accounts_by_username),
    path('account_transactions/<int:account_id>', account_transactions),
]