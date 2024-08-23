from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

RECIPE_API_BASE_URL = settings.RECIPE_API_BASE_URL
API_KEY = api_key = settings.API_KEY

@api_view(['POST'])
def suggest_recipes(request):
    ingredients = request.data.get('ingredients')
    if not ingredients:
        return Response({'error': 'No ingredients provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    response = requests.get(f'{RECIPE_API_BASE_URL}/findByIngredients', params={
        'ingredients': ingredients,
        'apiKey': API_KEY
    })
    
    if response.status_code == 200:
        return Response(response.json())
    return Response({'error': 'Failed to fetch recipes'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def recipe_information(request):
    recipe_id = request.query_params.get('recipe_id')
    if not recipe_id:
        return Response({'error': 'No recipe ID provided'}, status=status.HTTP_400_BAD_REQUEST)

    response = requests.get(f'{RECIPE_API_BASE_URL}/{recipe_id}/information', params={
        'apiKey': API_KEY
    })
    
    if response.status_code == 200:
        return Response(response.json())
    return Response({'error': 'Failed to fetch recipe nutrition'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def recipe_macros(request):
    recipe_id = request.query_params.get('recipe_id')
    if not recipe_id:
        return Response({'error': 'No recipe ID provided'}, status=status.HTTP_400_BAD_REQUEST)

    response = requests.get(f'{RECIPE_API_BASE_URL}/{recipe_id}/nutritionWidget.json', params={
        'apiKey': API_KEY
    })
    
    if response.status_code == 200:
        return Response(response.json())
    return Response({'error': 'Failed to fetch recipe nutrition'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def custom_nutrition(request):
    ingredients = request.data.get('ingredients')
    if not ingredients:
        return Response({'error': 'No ingredients provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'message': 'Custom nutritional calculation not implemented'}, status=status.HTTP_200_OK)

@api_view(['GET'])
def random_recipe(request):
    response = requests.get(f'{RECIPE_API_BASE_URL}/random', params={
        'apiKey': API_KEY
    })
    
    if response.status_code == 200:
        return Response(response.json())
    return Response({'error': 'Failed to fetch random recipe'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

