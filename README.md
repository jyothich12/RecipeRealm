# Application Overview

Recipe Realm is web application that will help users to search for recipes based on the ingredients that they already have. The features cover recipe recommendations, nutrition data as well as a custom macro's calculator by ingredients. It is made with modern web technologies ensuring a simple user experience for anyone wanting to improve their cooking and dietary choices.


# Detailed Features

## Ingredient-Based Recipe Search

Input: Users enter a list of ingredients they have.
Output: The app returns you a list of recipes based on what ingredients are entered. We are pulling recipes from a third party(spoonacular) API and show details such as missed ingredients, used ingredients, step by step cooking instructions and macros for the selected recipe.


## Nutritional Calculator
Input : User can enter a list of ingredients for making meals.
Output: The app calculates and displays the nutritional content of the meal, including calories, protein, fats, and carbohydrates.


## Contact Us
Users can reach out for support or provide feedback through a contact form.


# Application Structure

## Frontend
Framework: React.js
Styling: Bootstrap for responsive design and consistent styling.
Routing: React Router for handling navigation between different pages.

## Backend
Framework : Django with REST Framework

# Future Enhancements

* Custom Nutritional Calculator: We'll add a feature that allows users to calculate the nutritional information of recipes based on the ingredients and serving sizes. This will help users make healthier choices by understanding the nutritional content of their meals.
* User Accounts: We can to add user authentication, allowing users to create accounts and receive personalized recipe recommendations based on their preferences and past activities.
* Recipe Reviews: Users will soon be able to rate and review recipes, helping others discover the best options and providing valuable feedback to improve the recipe collection.
* Contact Us Form: Currently, the "Contact Us" form is not saving data. We'll implement backend functionality to ensure that any information submitted through the form is stored in a database, allowing us to manage and respond to user inquiries effectively.


# How To Run
* clone this repo
* goto Receipe backend
* update .env with API credentials for spoonacular and Django secret
* run Python manage.py runserver
* navigate to Receipe frontend in different terminal and run npm install and then npm start
* You should be able to access the application on localhost:3000

