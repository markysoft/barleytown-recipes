
export default class Notes {
  constructor(recipe) {
    this.name = 'Notes'
    this.items = recipe.notes ? recipe.notes.split('\n') : []
  }
}
