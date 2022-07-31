class Pantry{
  constructor(ingredients, recipeRepository) {
    this.pantryContents = ingredients;
    this.allRecipes = recipeRepository;
    this.missingIngredientNames = [];
    this.missingIngredients = [];
    this.recipeIngredients;
  };

  checkForIngredients(recipeMatch, recipeData){
    let recipeIngredients = recipeData.find(recipe => recipe.id === recipeMatch.id).ingredients;
    let pantryIngredients = this.pantryContents;
    pantryIngredients.forEach(pantryIngredient => {
    recipeIngredients.forEach(recipeIngredient => {
        if((recipeIngredient.id !== pantryIngredient.ingredient) && (recipeIngredient.quantity.amount >= pantryIngredient.amount )) {
          this.missingIngredients.push(recipeIngredient.id);
        };
      });
    });
    let noDuplicateIds = [...new Set(this.missingIngredients)]
    noDuplicateIds.forEach(missingId => {
      recipeMatch.ingredientList.forEach(ingredient => {
        if(ingredient.id === missingId) {
          this.missingIngredientNames.push(ingredient.name)
        };
      });
    });
    let noDuplicateNames = [...new Set(this.missingIngredientNames)]
    return `You have ${noDuplicateIds.length} missing ingredients. The ingredients needed are ${noDuplicateNames}.`;
  };

  canCookRecipe() {
    if(this.missingIngredients === []) {
      return 'You can cook this recipe'
    } else {
      return 'sorry you are missing ingredients to cook this recipe'
    }
  }
};
  
export default Pantry;

