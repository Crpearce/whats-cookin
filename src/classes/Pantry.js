import usersData from "../data/users";

class Pantry{
  constructor(user) {
    this.pantryContents = user;
  };

  checkForIngredients(id, recipeData){
    let hasIngredients;
    let recipeIngredients = recipeData.find(recipe => recipe.id === id).ingredients;
    recipeIngredients.forEach(ingredient => {
      if(!this.pantryContents[ingredient]) {
        hasIngredients = false;
      } else {
        usersData.forEach(ingredient => {
          if(ingredient.amount >= ingredient.quantity.amount) {
            hasIngredients = true;
          }
        })
      }
    })
    return hasIngredients;
  }

  checkMissingIngredientsTotal(id, recipeData) {
    let recipeIngredients = recipeData.find(recipe => recipe.id === id).ingredients;
    let missingIngredients = [];
    recipeIngredients.forEach((recipeIngredient) => {
      let inPantry = false
    this.pantryContents.pantry.pantryContents.find((pantryIngredient) => {
      if(recipeIngredient.id === pantryIngredient.ingredient) {
        inPantry = true
      }
    })
      if(inPantry === false) {
        missingIngredients.push(recipeIngredient)
      }
    })
    return missingIngredients.length
  }
};
  
export default Pantry;
