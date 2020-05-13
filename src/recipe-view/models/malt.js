function toItem(f) {
  return {
    name: f.name,
    value: `(${f.percentage.toFixed(1)}%) ${f.amount.toFixed(2)} kg`,
  }
}

export default class Malt {
  constructor(recipe) {
    this.icon = 'waves'
    this.name = 'Malt'
    this.items = recipe.fermentables.map(toItem)
  }
}
