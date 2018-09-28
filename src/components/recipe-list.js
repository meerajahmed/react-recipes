import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ style, recipes, onClickHandler }) => (
  <div style={style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map(({ id, name, category }) => (
        <li
          key={id}
          onClick={() => onClickHandler(id)}
          className="py2 border-bottom border-bottom-dashed pointer"
        >
          <span>{name}</span>
          <span>{category}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClickHandler: PropTypes.func,
};

export default RecipeList;
