from django.urls import path
from .views import login, logout, valid_session

urlpatterns = [
    path('login/', login),
    path('logout/', logout),
    path('valid_session/', valid_session),
]