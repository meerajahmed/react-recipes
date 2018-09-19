import React, {Component} from "react";
import favicon from "../favicon.png";
import Header from "./header";
import RecipeList from "./recipe-list";
import RecipeDetail from "./recipe-detail";

class App extends Component {

  state = {
    recipes: [],
    recipeDetails: null
  };

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(response => response.json())
      .then(recipes => this.setState(() => ({recipes})))
  }

  render() {
    return (
      <div>
        <img src={favicon} alt="react recipes logo"/>
        <Header />
        <RecipeList
          recipes={this.state.recipes}
          onClickHandler={this.onClickHandler}
        />
        <RecipeDetail recipeDetails={this.state.recipeDetails}/>
      </div>
    );
  }

  onClickHandler = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(response => response.json())
      .then(recipeDetails => this.setState(() => ({recipeDetails})))
  };

}

export default App;