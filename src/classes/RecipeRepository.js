class RecipeRepository {
  constructor(recipes) {
     this.recipes = recipes
  };

  pickRecipeTag(userTag) {
    let recipesByTag = [];
    const findByTag = this.recipes.filter((recipe) => {
    recipe.tags.forEach(tag => {
      if(tag === userTag) {
        recipesByTag.push(recipe)
      }
    })
  });
  return recipesByTag
};

  pickRecipeName(userName) {
    let recipesByName = [];
    const findByName = this.recipes.filter(recipe => {
      if(recipe.name.toLowerCase().includes(userName.toLowerCase())){
        recipesByName.push(recipe)
      }
   });
  return recipesByName
  };
}

export default RecipeRepository;
