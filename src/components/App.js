import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      recipe: this.recipes,
      recipeSearch: this.recipes
    };
  }

  handleChangeFilter = e => {
    let valueFilter = e.target.value.toUpperCase()

    let recipeFilter = this.state.recipe.filter((recipe) =>
        recipe.title.toUpperCase().includes(valueFilter) || recipe.ingredients.toUpperCase().includes(valueFilter)
    )

    this.setState({
      searchString: e.target.value,
      recipeSearch: recipeFilter
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar value={this.state.searchString} searchString={this.handleChangeFilter} />
        <div className="container mt-10">
          <div className="row">
            {
              this.state.recipeSearch.length === 0 ? <h1>No results to show.</h1> 
              :
              this.state.recipeSearch.map((value,i) => (
                <RecipeItem key={i} {...value} search={this.state.searchString} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
