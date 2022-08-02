class Pantry{
  constructor(ingredients) {
    this.pantryContents = ingredients;
    this.missingIngredientNames = [];
    this.missingIngredients = [];
    this.noDuplicateIds;
    this.recipeIngredients;
  };

  findRecipeIngredients(recipeMatch, recipeData) {
    this.recipeIngredients = recipeData.find(recipe => recipe.id === recipeMatch.id).ingredients;
  };

  checkForIngredients(){
    this.missingIngredients = []
    let pantryIngredients = this.pantryContents;
    pantryIngredients.forEach(pantryIngredient => {
    this.recipeIngredients.forEach(recipeIngredient => {
        if((recipeIngredient.id !== pantryIngredient.ingredient) || (recipeIngredient.quantity.amount >= pantryIngredient.amount )) {
          this.missingIngredients.push(recipeIngredient.id);
        };
      });
    });
    let noDuplicateIds = [...new Set(this.missingIngredients)];
    return `You have ${noDuplicateIds.length} missing ingredient(s).`;
  };

  checkMissingIdNames(recipeMatch) {
    this.missingIngredientNames = [];
    let noDuplicateIds = [...new Set(this.missingIngredients)];
    noDuplicateIds.forEach(missingId => {
      recipeMatch.ingredientList.forEach(ingredient => {
        if(ingredient.id === missingId) {
          this.missingIngredientNames.push(ingredient.name);
        };
      });
    });
    let missingNames = [...new Set(this.missingIngredientNames)];
    return `Ingredients needed to make recipe: ${missingNames}`;
  };
};

export default Pantry;
