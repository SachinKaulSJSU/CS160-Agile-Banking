from django.urls import path
from .views import create_account, account_status, get_accounts_by_user, get_account_by_id, get_accounts_by_username, get_user_by_account

urlpatterns = [
    path('create_account/', create_account),
    path('account_status/', account_status),
    path('get_accounts_by_user/', get_accounts_by_user),
    path('get_accounts_by_username/<str:username>', get_accounts_by_username),
    path('get_account_by_id/<int:account_id>/', get_account_by_id),
    path('get_user_by_account/<int:account_id>/', get_user_by_account)
]