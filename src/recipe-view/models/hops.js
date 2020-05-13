
function getGrams(kg) {
  return (1000 * kg).toFixed(1)
}
function getTime(time) {
  return time > 200 ? `${time / 60 / 24} days` : `${time} mins`
}

function toItem(h) {
  return {
    name: h.name,
    value: ` ${getGrams(h.amount)} g for ${getTime(h.time)}`,
  }
}

export default class Hops {
  constructor(recipe) {
    this.icon = 'whatshot'
    this.name = 'Hops'
    this.items = [...recipe.hops.map(toItem), ...recipe.miscs.map(toItem)]
  }
}
