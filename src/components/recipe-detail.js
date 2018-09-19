import React from "react";
import recipe from "../favicon.png";

const RecipeDetail = (props) => {

  if (!props.recipeDetails) {
    return (
      <p>Please select a recipe to see details</p>
    );
  }

  const {name, category, calories, image, ingredients, steps} = props.recipeDetails;

  return (
    <div>
      Recipe Detail
      <img src={image} alt={name}/>
      <div>
        <span>{name}</span>
        <span>{category}</span>
        <span>{calories} cal</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        { ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>)) }
      </ul>
      <h3>Steps</h3>
      <ol>
        { steps.map((step) => (<li key={step}>{step}</li>)) }
      </ol>
    </div>
  );

};

export default RecipeDetail;