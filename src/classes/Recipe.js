class Recipe {
  constructor(recipe, ingredientData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientList = ingredientData;
  };
  listIngredients() {
    let ingredientNames = [];
    let getIds = this.ingredients.map(ingredient => ingredient.id)
    getIds.forEach(id => {
      this.ingredientList.forEach(ingredient => {
        if (ingredient.id === id) {
          ingredientNames.push(ingredient.name)
        }
      })
    })
    return ingredientNames
  };
  estimateIngredientCost() {
    let estimatedCost = 0;

    this.ingredients.forEach(ingredient => {
      this.ingredientList.forEach(ingredientInfo => {
        if(ingredient.id === ingredientInfo.id) {
          estimatedCost += ((ingredient.quantity.amount * ingredientInfo.estimatedCostInCents) / 100);
        }
      })
    })
    return parseFloat(estimatedCost.toFixed(2))
  };
  //POTENTIAL REFACTOR TO RID OF DOUBLE FOREACH
  // this.ingredients.forEach(ingredient => {
  //   const foundIngredient = this.ingredientList.find(ingredientInfo => {
  //      return ingredient.id === ingredientInfo.id
  //    })
  //    console.log(foundIngredient);

  //    foundIngredient estimatedCost += ((ingredient.quantity.amount * ingredientInfo.estimatedCostInCents) / 100);
  //    }
  //  })
  //  return estimatedCost.toFixed(2);

  provideRecipeInstructions() {
    let steps = this.instructions.map(step => {
      return `Step ${step.number}: ${step.instruction}`
    })
    return steps
  };
};

export default Recipe;
