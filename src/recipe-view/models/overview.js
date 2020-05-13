export default class Overview {
  constructor(recipe) {
    this.icon = 'info'
    this.name = 'Overview'
    this.items = [
      { name: 'Batch size', value: `${recipe.batchSize.toFixed(2)} litres` },
      { name: 'Total liquor', value: `${recipe.totalLiquor.toFixed(2)} litres` },
      { name: 'Infuse temp.', value: recipe.infuseTemp.replace(' C', '°C') },
      { name: 'Mash temp.', value: recipe.mashTemp.replace(' C', '°C') },
      { name: 'Boil time', value: `${recipe.boilTime} mins` },
      { name: 'Original gravity', value: recipe.og.toFixed(3) },
      { name: 'Final gravity', value: recipe.fg.toFixed(3) },
      { name: 'ABV', value: recipe.abv.replace(' %', '%') },
    ]
  }
}
