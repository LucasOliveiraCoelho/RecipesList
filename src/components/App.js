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
      recipeSearch: []
    };
  }

  handleChangeFilter = e => {
    let valueFilter = e.target.value.toUpperCase()
    
    let recipeFilter = this.state.recipe.filter((recipe) =>
        recipe.title.toUpperCase().includes(valueFilter) || recipe.ingredients.toUpperCase().includes(valueFilter)
    )

    this.setState({
      searchString: valueFilter,
      recipeSearch: recipeFilter
    })
  }
  componentWillMount = e =>{
    this.setState({
      recipe: this.recipes
    })
  }

  render() { 
    return (
      <div className="App">
        <Navbar value={this.state.searchString} searchString={this.handleChangeFilter} />
        <div className="container mt-10">
          <div className="row">
            {
              this.state.searchString !== '' && this.state.recipeSearch.length === 0 ? <div>Not found</div> 
              : 
              <RecipeItem recipe={this.state.searchString !== '' ? this.state.recipeSearch : this.state.recipe} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
