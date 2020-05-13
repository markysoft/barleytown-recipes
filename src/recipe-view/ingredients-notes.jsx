import React from 'react'
import PropTypes from 'prop-types'

function ingredientsItem(item) {
  return <div key={item.name}><h3>{item.name}</h3><p>{item.notes}</p></div>
}

export default function IngredientsNotes(props) {
  const { title, ingredients } = props
  return (
    <div>
      <h3>{title}</h3>
      { ingredients.map(ingredientsItem) }
    </div>
  )
}

IngredientsNotes.ingredientsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    notes: PropTypes.string,
  }),
)

IngredientsNotes.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: IngredientsNotes.ingredientsType.isRequired,
}
