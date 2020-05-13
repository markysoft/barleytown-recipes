import React from 'react'
import PropTypes from 'prop-types'

import { getRecipe } from '../services/recipe-service'
import Recipe from './recipe'
import Overview from './models/overview'
import Malt from './models/malt'
import Hops from './models/hops'
import Yeast from './models/yeast'
import Notes from './models/notes'

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined,
      recipe: undefined,
    }
  }

  async componentDidMount() {
    try {
      // eslint-disable-next-line react/destructuring-assignment
      const { recipeId } = this.props.match.params
      const recipe = await getRecipe(recipeId)
      const overview = new Overview(recipe)
      const notes = new Notes(recipe)
      const malt = new Malt(recipe)
      const hops = new Hops(recipe)
      const yeasts = new Yeast(recipe)
      this.setState({
        recipe: {
          name: recipe.name,
          notes,
          overview,
          malt,
          hops,
          yeasts,
          ingredientsDetails: recipe.ingredientsDetails,
        },
      })
    } catch (error) {
      this.setState({
        error,
      })
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderRecipe(recipe) {
    const {
      name, notes, overview, malt, hops, yeasts, ingredientsDetails,
    } = recipe
    return (
      <Recipe
        name={name}
        notes={notes}
        overview={overview}
        malt={malt}
        hops={hops}
        yeasts={yeasts}
        ingredientsDetails={ingredientsDetails}
      />
    )
  }

  // eslint-disable-next-line class-methods-use-this
  renderError(error) {
    return (<span>{error && error.message}</span>)
  }

  render() {
    const { recipe, error } = this.state
    return recipe ? this.renderRecipe(recipe) : this.renderError(error)
  }
}

RecipeContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string,
    }),
  }).isRequired,
}

export default RecipeContainer
