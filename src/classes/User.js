class User {
  constructor(recipeRepository) {
    // console.log(recipeRepository);
    this.savedRecipes = [];
    this.allRecipes = recipeRepository;
    // console.log(1, this.allRecipes)
  }

filterSavedByTag(recipeCategory) {
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

filterAllByTag(recipeCategory) {
  let recipesByTag = [];
  const findByTag = this.allRecipes.recipes.filter((recipe) => {
    if(recipe.tags.includes(recipeCategory)) {
    recipesByTag.push(recipe)
    } 
  })
return recipesByTag   
};


// this works but has some bugs with lots of rrepeats/not refreshing the page after the search
// filterAllByTag(recipeCategory) {
//   let recipesByTag = [];
// const findByTag = this.allRecipes.recipes.filter((recipe) => {
// recipe.tags.forEach(tag => {
//   if(tag === recipeCategory) {
//     recipesByTag.push(recipe)
//   }
// })
// });
// return recipesByTag   
// };

filterAllByName(recipeName) {
  let recipesByName = [];
  const findByName = this.allRecipes.recipes.filter(recipe => {
    if(recipe.name.toLowerCase().includes(recipeName.toLowerCase())){
      recipesByName.push(recipe)
    }
  });
return recipesByName
};

filterSavedRecipesByName(recipeName) {
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