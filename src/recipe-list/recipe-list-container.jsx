import React from 'react'
import RecipeList from './recipe-list'
import { getRecipes } from '../services/recipe-service'

class RecipeListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      error: undefined,
      recipes: [],
    }
  }

  async componentDidMount() {
    try {
      const recipes = await getRecipes()
      this.setState({ recipes })
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    const { recipes, error } = this.state
    return (
      <RecipeList error={error} recipes={recipes} />
    )
  }
}

export default RecipeListContainer
