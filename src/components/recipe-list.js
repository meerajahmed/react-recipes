import React from "react";

const RecipeList = (props) => (
  <div>
    <h2>Recipes</h2>
    <ul>
      {props.recipes.map(({id, name, category}) => (
        <li key={id} onClick={() => props.onClickHandler(id)}>
          <span>{name}</span>
          <span>{category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;