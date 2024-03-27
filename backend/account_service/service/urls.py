from django.urls import path
from .views import create_account, account_status, get_account

urlpatterns = [
    path('create_account/', create_account),
    path('account_status/', account_status),
    path('get_account/', get_account)
]