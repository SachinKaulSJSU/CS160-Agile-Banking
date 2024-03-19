import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render

USER_URL = 'http://localhost:8001/api'

# register
@api_view(['POST'])
def register(request):
    try:
        response = requests.post(f'{USER_URL}/register/', data=request.data)
        response.raise_for_status()
        return Response(response.json(), status=response.status_code)
    except requests.RequestException as e:
        return Response({'error': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)