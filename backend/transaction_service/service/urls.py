from django.urls import path
from .views import deposit, transfer

urlpatterns = [
    path('deposit/', deposit),
    path('transfer/', transfer)
]