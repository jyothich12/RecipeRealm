import React from 'react';
import './App.css'; 

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
      <h1>Welcome to the Recipe Realm</h1>
      <p>Discover a world of culinary possibilities right at your fingertips! Our app is designed 
          to help you create delicious meals based on the ingredients you already have. Whether 
          you’re a seasoned chef or a kitchen novice, you’ll find recipes that fit your needs and preferences.</p>
          <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li><strong>Ingredient-Based Recipe Suggestions:</strong> Simply input the ingredients you have on hand, and we’ll suggest recipes you can make with them.</li>
          <li><strong>Recipe Nutritional Information:</strong> After selecting a recipe, get a detailed breakdown of its nutritional value including calories, protein, fats, and carbs.</li>
          <li><strong>Custom Nutritional Calculator:</strong> Enter your own ingredients and get an instant nutritional profile for your meal.</li>
          <li><strong>Random Recipe Suggestion:</strong> Feeling adventurous? Get a random recipe suggestion to try something new and exciting.</li>
        </ul>
        <p>
          <strong>How It Works:</strong>
        </p>
        <ol>
          <li><strong>Search for Recipes:</strong> Enter ingredients you have and see a list of recipes you can make.</li>
          <li><strong>View Details:</strong> Click on any recipe to see its details, including ingredients, instructions.</li>
          <li><strong>Calculate Nutrition:</strong> Use our custom nutritional calculator to get a breakdown of your meal’s nutrition based on the ingredients you provide.</li>
          <li><strong>Get Inspired:</strong> Explore random recipe suggestions and add some variety to your meals.</li>
        </ol>
        <p>
          Start exploring today and turn your everyday ingredients into extraordinary meals!
        </p>
      </div>
    </div>
  );
}

export default Home;
