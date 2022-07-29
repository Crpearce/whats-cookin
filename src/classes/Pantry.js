class Pantry{

  constructor(user){
    this.pantryContents = user;
    // this.userId = id;
  }

  checkForIngredients(id, recipeData){
    console.log(recipeData)
    let hasIngredients;
    let currentRecipe = recipeData.find(recipe => recipe.id === id).ingredients;
    console.log(currentRecipe)
    currentRecipe.forEach(ingredient => {
      if(!this.pantryContents[ingredient]){
        hasIngredients = false;
      } else {
        this.pantryContents.forEach(ingredient => {
          if(ingredient.amount >= ingredient.quantity.amount){
            hasIngredients = true;
          }
        })
      }
    })
    console.log(hasIngredients)
    return hasIngredients
  }

  checkMissingIngredientsTotal(id, recipeData) {
    let currentRecipe = recipeData.find(recipe => recipe.id === id).ingredients;
    let missingIngredients = [];
    currentRecipe.forEach(recipeIngredient => {
      let inPantry;
    this.pantryContents.forEach(pantryIngredient => {
      if(recipeIngredient.id === pantryIngredient.ingredient) {
        return
      }
    })
      if(inPantry === false) {
        missingIngredients.push(recipeIngredient)
      }
      console.log('test2', missingIngredients);
    })
  }
};




export default Pantry;
