import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import DetailsCard from './details-card'
import IngredientsNotes from './ingredients-notes'
import RecipeNotes from './recipe-notes'

export default function Recipe(props) {
  const {
    name, notes, overview, malt, hops, yeasts, ingredientsDetails,
  } = props
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}><h1>{name}</h1></Grid>
        <Grid item sm={6}>
          <DetailsCard details={overview} />
          <RecipeNotes notes={notes} />
        </Grid>
        <Grid item sm={6}>
          <DetailsCard details={malt} />
          <DetailsCard details={hops} />
          { yeasts.items && <DetailsCard details={yeasts} />}
        </Grid>
        <Grid item sm={6}>
          <IngredientsNotes title="Fermentables" ingredients={ingredientsDetails.fermentables} />
        </Grid>
        <Grid item sm={6}>
          <IngredientsNotes title="Hops" ingredients={ingredientsDetails.hops} />
        </Grid>
      </Grid>
    </>
  )
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  overview: DetailsCard.detailsType.isRequired,
  notes: RecipeNotes.notesType.isRequired,
  malt: DetailsCard.detailsType.isRequired,
  hops: DetailsCard.detailsType.isRequired,
  yeasts: DetailsCard.detailsType.isRequired,
  ingredientsDetails: PropTypes.shape({
    fermentables: IngredientsNotes.ingredientsType,
    hops: IngredientsNotes.ingredientsType,
  }).isRequired,
}
