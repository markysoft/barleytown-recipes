
import Recipe from './recipe'

const API_URL = process.env.REACT_APP_RECIPE_API_URL

function descending(a, b) {
  return a.id > b.id ? -1 : 1
}

export async function getRecipes() {
  const res = await fetch(API_URL)
  const results = await res.json()
  return results.sort(descending)
}

export async function getRecipe(id) {
  const res = await fetch(`${API_URL}/${id}`)
  return new Recipe(await res.json())
}
