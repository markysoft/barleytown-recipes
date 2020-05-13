import IngredientsDetail from './Ingredients-details'

export default class Recipe {
  constructor(brew) {
    if (brew && brew.recipe) {
      // Object.assign(this, brew.recipe);
      this.name = brew.recipe.name
      this.notes = brew.recipe.notes
      this.batchSize = brew.recipe.batch_size
      this.totalLiquor = brew.recipe.mash.mash_steps.mash_step.infuse_amount
      this.infuseTemp = brew.recipe.mash.mash_steps.mash_step.infuse_temp
      this.mashTemp = brew.recipe.mash.mash_steps.mash_step.display_step_temp
      this.boilTime = brew.recipe.boil_time
      this.yeasts = brew.recipe.yeasts
      this.hops = brew.recipe.hops
      this.miscs = brew.recipe.miscs || []
      this.og = brew.recipe.og
      this.fg = brew.recipe.fg
      this.abv = brew.recipe.abv
      this.addFermentablePercentages(brew.recipe.fermentables)
      this.ingredientsDetails = new IngredientsDetail(this.hops, this.fermentables, this.miscs)
    }
  }


  addFermentablePercentages(ferments) {
    const totalWeight = ferments.reduce((prev, curr) => prev + curr.amount, 0)

    this.fermentables = ferments.map((f) => {
      // eslint-disable-next-line no-param-reassign
      f.percentage = 100 * (f.amount / totalWeight)
      return f
    })
  }
}
