from django.urls import path
from .views import register, create_account, account_status, get_accounts_by_user, deposit, transfer

urlpatterns = [
    path('register/', register),
    path('create_account/', create_account),
    path('account_status/', account_status),
    path('get_accounts_by_user/', get_accounts_by_user),
    path('deposit/', deposit),
    path('transfer/', transfer)
]