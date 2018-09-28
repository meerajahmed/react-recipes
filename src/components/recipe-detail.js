import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RecipeDetail = ({ recipeDetails, style, className }) => {
  if (!recipeDetails) {
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
        {'Please select a recipe to see details'}
      </p>
    );
  }

  const {
    name, category, calories, image, ingredients, steps,
  } = recipeDetails;

  return (
    <div
      style={style}
      className={classNames('p2 bg-white', className)}
    >
      {'Recipe Detail'}
      <h2 className="h2">{name}</h2>
      <img src={image} alt={name} className="fit" />
      <div>
        <span>{category}</span>
        <span>
          {calories}
          {'cal'}
        </span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        { ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>)) }
      </ul>
      <h3>Steps</h3>
      <ol>
        { steps.map(step => (<li key={step}>{step}</li>)) }
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipeDetails: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RecipeDetail;
