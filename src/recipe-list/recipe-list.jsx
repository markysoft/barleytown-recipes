import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import RecipeListItem from './recipe-list-item'

function RecipeList(props) {
  const { recipes, error } = props
  return (
    <Grid container spacing={1}>
      { recipes.map((recipe) => <RecipeListItem key={recipe.id} recipe={recipe} />) }
      { error && error.message }
    </Grid>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(RecipeListItem.propTypes).isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
}

export default RecipeList
