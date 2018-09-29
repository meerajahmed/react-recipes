import React from "react";

const RecipeList = (props) => (
  <div style={props.style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {props.recipes.map(({id, name, category}) => (
        <li 
          key={id} 
          onClick={() => props.onClickHandler(id)}
          className="py2 border-bottom border-bottom-dashed pointer"
          >
            <span>{name}</span>
            <span>{category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;