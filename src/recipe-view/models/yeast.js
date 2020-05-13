function toItem(y) {
  return {
    name: `${y.name} ${y.form}`,
    value: `${y.laboratory}`,
  }
}

export default class Yeast {
  constructor(recipe) {
    this.icon = 'bug_report'
    this.name = 'Yeast'
    this.items = recipe.yeasts ? recipe.yeasts.map(toItem) : undefined
  }
}
