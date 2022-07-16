class User {
  constructor(recipeRepository) {
    // console.log(recipeRepository);
    this.savedRecipes = [];
    this.allRecipes = recipeRepository;
    // console.log(1, this.allRecipes)
  }

filterByTag(recipeCategory) {
    let recipesByTag = [];

const findByTag = this.savedRecipes.filter((recipe) => {
  recipe.tags.forEach(tag => {
    if(tag === recipeCategory) {
      recipesByTag.push(recipe)
    }
  })
});
return recipesByTag   
};

filterByName(recipeName) {
    let recipesByName = [];
    const findByName = this.savedRecipes.filter(recipe => {
      if(recipe.name.toLowerCase().includes(recipeName.toLowerCase())){
        recipesByName.push(recipe)
      }
    });
  return recipesByName
};



addRecipeToList(saveRecipeButton) {
    let userSelectedRecipe = this.allRecipes.pickRecipeName(saveRecipeButton)
    userSelectedRecipe.forEach(recipe => {
        if(!this.savedRecipes.includes(recipe)) {
            this.savedRecipes.push(recipe)
        }
    })
};

removeRecipeFromList(recipeObject) {
    let getIndex = this.savedRecipes.indexOf(recipeObject);
    this.savedRecipes.splice(getIndex, 1);
};


}

export default User;