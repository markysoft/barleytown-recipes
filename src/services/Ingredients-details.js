
function toIngredientsDetails(items) {
  const dictionary = items.map((i) => ({ name: i.name, notes: i.notes }))
    .reduce((prev, cur) => {
      // eslint-disable-next-line no-param-reassign
      prev[cur.name] = cur
      return prev
    }, {})
  return Object.keys(dictionary).map((k) => dictionary[k])
}

export default class IngredientsDetails {
  constructor(hops, fermentables, misc) {
    this.fermentables = toIngredientsDetails(fermentables)
    this.hops = [...toIngredientsDetails(hops), ...toIngredientsDetails(misc)]
  }
}
