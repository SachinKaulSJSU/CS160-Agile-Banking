from django.urls import path
from .views import register, create_account, account_status, get_account

urlpatterns = [
    path('register/', register),
    path('create_account/', create_account),
    path('account_status/', account_status),
    path('get_account/', account_status),
]