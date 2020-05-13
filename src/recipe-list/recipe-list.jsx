import React from 'react'

import Grid from '@material-ui/core/Grid'

import RecipeListItem from './recipe-list-item'

import { getRecipes } from '../services/recipe-service'

class RecipeList extends React.Component {
  constructor(props) {
    super(props)
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
      <Grid container spacing={1}>
        { recipes.map((recipe) => <RecipeListItem key={recipe.id} recipe={recipe} />) }
        { error && error.message }
      </Grid>
    )
  }
}

export default RecipeList
