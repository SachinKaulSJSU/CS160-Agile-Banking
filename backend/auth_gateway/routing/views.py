import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

session = requests.Session()
session.keep_alive = True

USER_URL = 'http://localhost:8001/api'
ACCOUNT_URL = 'http://localhost:8002/api'

# helper function that makes post requests to a specified service
def post_request(url, endpoint, data):
    try:
        response = session.post(f'{url}/{endpoint}/', data=data)
        response.raise_for_status()
        return Response(response.json(), status=response.status_code)
    except requests.HTTPError as e:
        return Response({'error': f'{e}: {e.response.json()}'}, status=e.response.status_code)
    except requests.RequestException as e:
        return Response({'error': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# helper function that makes get requests to a specified service    
def get_request(url, endpoint, user_id):
    try:
        response = session.get(f'{url}/{endpoint}/', params={'user_id': user_id})
        response.raise_for_status()
        return Response(response.json(), status=response.status_code)
    except requests.HTTPError as e:
        return Response({'error': f'{e}: {e.response.json()}'}, status=e.response.status_code)
    except requests.RequestException as e:
        return Response({'error': f'{e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# USER SERVICE
# register
@api_view(['POST'])
def register(request):
    data = request.data
    return post_request(USER_URL, 'register', data)


# ACCOUNT SERVICE
# account create
@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def create_account(request):
    data = request.data
    data['user'] = request.user.id
    return post_request(ACCOUNT_URL, 'create_account', data)


# account status
@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def account_status(request):
    data = request.data
    return post_request(ACCOUNT_URL, 'account_status', data)


# get all accounts
@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def get_accounts_by_user(request):
    try:
        # Forward the request to the 'get_accounts' endpoint
        response = session.get(f'{ACCOUNT_URL}/get_accounts_by_user/{request.user.id}')
        
        return Response(response.json(), status=response.status_code)
    except requests.RequestException as e:
        # Handle any errors that occurred during the request
        return Response({'error': f'Error fetching bank accounts: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    