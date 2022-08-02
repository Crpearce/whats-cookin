class Pantry{
  constructor(ingredients) {
    this.pantryContents = ingredients;
    this.missingIngredientNames = [];
    this.missingIngredients = [];
    this.recipeIngredients;
  };

  findRecipeIngredients(recipeMatch, recipeData) {
    this.recipeIngredients = recipeData.find(recipe => recipe.id === recipeMatch.id).ingredients;
  };

  checkForIngredients(){
    this.missingIngredients = [];
    this.recipeIngredients.forEach(recipeIngredient => {
      let found = false;
    this.pantryContents.find(pantryIngredient => {
      if((recipeIngredient.id === pantryIngredient.ingredient) && (recipeIngredient.id <= pantryIngredient.ingredient)) {
        found = true;
      };
    });
       if(found === false) {
        this.missingIngredients.push(recipeIngredient.id)
        };
    });
    if(this.missingIngredients.length === 0) {
      return `<button class="cook-button">Cook Button</button>`;
    } else {
      return `You have ${this.missingIngredients.length} missing ingredients.`;
    }
  };

  checkMissingIdNames(recipeMatch) {
    this.missingIngredientNames = [];
    this.missingIngredients.forEach(missingId => {
      recipeMatch.ingredientList.forEach(ingredient => {
        if(ingredient.id === missingId) {
          this.missingIngredientNames.push(ingredient.name);
        };
      });
    });
    if(this.missingIngredientNames.length === 0) {
      return 'No missing ingredients'
    } else {
    return `Ingredients needed to make recipe: ${this.missingIngredientNames}`;
    };
  };
};
export default Pantry;
