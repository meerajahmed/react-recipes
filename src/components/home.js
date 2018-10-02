import React, { Component } from 'react';
import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';

class Home extends Component {
  state = {
    recipes: [],
    recipeDetails: null,
  };

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(response => response.json())
      .then(recipes => this.setState(() => ({ recipes })));
  }

  onClickHandler = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(response => response.json())
      .then(recipeDetails => this.setState(() => ({ recipeDetails })));
  };

  render() {
    const { recipes, recipeDetails } = this.state;
    return (
      <div>
        <main className="flex px4">
          <RecipeList
            recipes={recipes}
            onClickHandler={this.onClickHandler}
            style={{ flex: 3 }}
          />
          <RecipeDetail
            recipeDetails={recipeDetails}
            className="ml4"
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

export default Home;
