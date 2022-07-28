class Pantry{

  constructor(usersData){
    this.pantryContents = usersData;
  }

  checkForIngredients(id, recipeData){
    let hasIngredients = true;
    let currentRecipe = recipeData.find(recipe => recipe.id === id).ingredients;
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
    // console.log(hasIngredients)
    return hasIngredients
  }

  checkMissingIngredientsTotal(id, recipeData) {
    let currentRecipe = recipeData.find(recipe => recipe.id === id).ingredients;
    let missingIngredients = [];
    console.log(currentRecipe)
    currentRecipe.forEach((recipeIngredient) => {
      let inPantry = false
    this.pantryContents.find((pantryIngredient) => {
      if(recipeIngredient.id === pantryIngredient.ingredient) {
        inPantry = true
      }
    })
      if(inPantry === false) {
        missingIngredients.push(recipeIngredient)
      }
    })
  console.log(missingIngredients);
  }
};
  



export default Pantry;
