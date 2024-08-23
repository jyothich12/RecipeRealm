from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.suggest_recipes, name='suggest_recipes'),
    path('recipe-information/', views.recipe_information, name='recipe-information'),
    path('recipe-macros/', views.recipe_macros, name='recipe-macros'),
    path('custom-nutrition/', views.custom_nutrition, name='custom_nutrition'),
    path('random-recipe/', views.random_recipe, name='random_recipe'),
]

