import React from "react";
import recipe from "../favicon.png";
import classNames from 'classnames';

const RecipeDetail = (props) => {

  if (!props.recipeDetails) {
    return (
      <p 
        style={props.style}
        className={classNames("h3 p2 bg-white italic center", props.className)}
        >
        Please select a recipe to see details
      </p>
    );
  }

  const {name, category, calories, image, ingredients, steps} = props.recipeDetails;

  return (
    <div 
      style={props.style}
      className={classNames("p2 bg-white", props.className)}
      >
      Recipe Detail
      <h2 className="h2">{name}</h2>
      <img src={image} alt={name} className="fit"/>
      <div>
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