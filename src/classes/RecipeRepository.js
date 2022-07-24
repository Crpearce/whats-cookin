class RecipeRepository {
  constructor(recipes) {
     this.recipes = recipes
  };

  pickRecipeTag(userSelection) {
    let recipesByTag = [];
    const findByTag = this.recipes.filter((recipe) => {
    recipe.tags.forEach(tag => {
      if(tag === userSelection) {
        recipesByTag.push(recipe)
      }
    })
  });
  return recipesByTag
};

  pickRecipeName(userSelection) {
    let recipesByName = [];
    const findByName = this.recipes.filter(recipe => {
      if(recipe.name.toLowerCase().includes(userSelection.toLowerCase())){
        recipesByName.push(recipe)
      }
   });
  return recipesByName
  };
}

export default RecipeRepository;
