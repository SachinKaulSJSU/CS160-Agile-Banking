from django.urls import path
from .views import login, logout, valid_session, super_login, valid_manager, register

urlpatterns = [
    path('login/', login),
    path('logout/', logout),
    path('valid_session/', valid_session),
    path('super_login/', super_login),
    path('valid_manager/', valid_manager),
    path('register/', register)
]