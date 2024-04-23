from django.urls import path
from .views import create_account, account_status, get_accounts_by_user, get_account_by_id, get_accounts_by_username

urlpatterns = [
    path('create_account/', create_account),
    path('account_status/', account_status),
    path('get_accounts_by_user/', get_accounts_by_user),
    path('get_accounts_by_username/<str:username>', get_accounts_by_username),
    path('get_account/<int:account_id>/', get_account_by_id)
]