import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe, ingredientData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientList = ingredientData;
    // console.log(this.ingredientList)
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
      // console.log(ingredientNames)
    })
    return ingredientNames



    // console.log(ingredientsData)
    // 1 - look at this.ingredients for id's
    //    - collect all ids from a recipe in an array
    //    - once we have the array we will go to step 2
    // 2 - find()? all id's that match the id's from our
    //        ingredient data array-- push into array??
    // 3 -find the matches and return the whole ingredient object
    // 4 - once we have the ingredient objects(new instantiation of Ingredient)
    //      we should be able to iterate through to return names
    //
    // ingredient.findIngredientName()
    // console.log(this.ingredients.name);
    // return this.ingredients.name
  };
  estimateIngredientCost() {
    let estimatedCost = 0;
    let getQuantity = this.ingredients.map(ingredient => ingredient.quantity.amount)
    console.log(getQuantity)

    let getIds = this.ingredients.map(ingredient => ingredient.id)
    getIds.forEach(id => {
      this.ingredientList.forEach(ingredient => {
        // console.log(this.ingredients)
        if (ingredient.id === id) {
          // console.log(getQuantity)
          estimatedCost += 1
          // getQuantity.forEach(quantity => (quantity * ingredient.estimatedCostInCents) / 100)
          //
          //calculation ___quantity-amount * ___estimatedCostInCents
          // console.log(ingredient.estimatedCostInCents);
          // total / 100
        }
      })

    })
    return estimatedCost;
  };
  provideRecipeInstructions() {
    return this.instructions
  };
};

export default Recipe;