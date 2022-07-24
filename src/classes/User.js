class User {
  constructor(usersData, recipeRepository) {
    this.name = usersData.name
    this.id = usersData.id;
    this.pantry = usersData.pantry
    this.savedRecipes = [];
    this.allRecipes = recipeRepository;
  };

  filterSavedByTag(recipeCategory) {
    let recipesByTag = [];

    this.savedRecipes.filter((recipe) => {
      recipe.tags.forEach(tag => {
        if (tag === recipeCategory) {
          recipesByTag.push(recipe)
        }
      })
    });
    return recipesByTag
  };

  filterAllByTag(recipeCategory) {
    let recipesByTag = [];
    this.allRecipes.recipes.filter((recipe) => {
      if (recipe.tags.includes(recipeCategory.toLowerCase())) {
        recipesByTag.push(recipe)
      }
    })
    return recipesByTag
  };

  filterAllByName(recipeName) {
    let recipesByName = [];
   this.allRecipes.recipes.filter(recipe => {
      if (recipe.name.toLowerCase().includes(recipeName.toLowerCase())) {
        recipesByName.push(recipe)
      }
    });
    return recipesByName
  };

  filterSavedRecipesByName(recipeName) {
    let recipesByName = [];
    this.savedRecipes.filter(recipe => {
      if (recipe.name.toLowerCase().includes(recipeName.toLowerCase())) {
        recipesByName.push(recipe)
      }
    });
    return recipesByName
  };


  addRecipeToCookbook(saveRecipeButton) {
    let userSelectedRecipe = this.allRecipes.pickRecipeName(saveRecipeButton)
    userSelectedRecipe.forEach(recipe => {
      if (!this.savedRecipes.includes(recipe)) {
        this.savedRecipes.push(recipe)
        this.renderCookBookCard(recipe)
      }
    })
  };

  renderCookBookCard(recipe) {
    console.log(recipe)
    savedRecipeCards.innerHTML += `
        <div class="recipe-card" id="${recipe.id}-recipeCOOKBOOK-card" data-id="${recipe.id}">
          <div class="recipe-image-box">
            <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
          </div>
          <h3>${recipe.name}</h3>
            <button class="view-recipe-button" id="${recipe.id}-view-recipeCOOKBOOK-button" data-id="${recipe.id}">View Recipe</button>
            <button class="delete-button" id="${recipe.id}-delete-recipe-button" data-id="${recipe.id}">Delete</button>
        </div>`
  
      // this.attachEventListenerToNewElement(`${recipe.id}-view-recipeCOOKBOOK-button`, 'click', viewCookBookRecipeDetails)    
      // this.attachEventListenerToNewElement(`${recipe.id}-delete-recipe-button`, 'click', deleteRecipe)
  }

  // attachEventListenerToNewElement(id, button, callbackFunction){
  //   setTimeout(()=> {
  //     document.getElementById(id).addEventListener(button, callbackFunction)
  //   }, 10)
  // }


  removeRecipeFromList(recipeObject) {
    let getIndex = this.savedRecipes.indexOf(recipeObject);
    this.savedRecipes.splice(getIndex, 1);
  };
}


export default User;
