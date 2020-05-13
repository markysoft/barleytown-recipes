import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

import beerColour from './beer-colour'

function getStyles(srm) {
  const { color, background } = beerColour(srm)
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      fontSize: '1.2em',
      background,
      color,
      fontWeight: 500,
    },
    link: {
      textDecoration: 'none',
    },
  }))
  return useStyles
}

function RecipeListItem(props) {
  const { recipe } = props
  const classes = getStyles(recipe.color)()
  return (
    <>
      <Grid item md={3} />
      <Grid item xs={12} md={6}>
        <Link className={classes.link} to={`recipe/${recipe.id}`}>
          <Paper className={classes.paper}>
            {recipe.name} {recipe.abv}
          </Paper>
        </Link>
      </Grid>
      <Grid item md={3} />
    </>
  )
}

RecipeListItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    color: PropTypes.number,
  }).isRequired,
}

export default RecipeListItem
