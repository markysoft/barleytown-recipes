import React from 'react'
import PropTypes from 'prop-types'

function recipeItem(item, index) {
  return <div key={index}><p>{item}</p></div>
}

function noteMarkup(name, items) {
  return (
    <div>
      <h3>{name}</h3>
      { items.map(recipeItem) }
    </div>
  )
}

export default function RecipeNotes(props) {
  const { notes: { name, items } } = props
  return items.length > 0 && noteMarkup(name, items)
}

RecipeNotes.notesType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
})


RecipeNotes.propTypes = {
  notes: RecipeNotes.notesType.isRequired,
}
