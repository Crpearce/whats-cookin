// import { renderCookBookCard } from '../scripts';
import Pantry from './Pantry';

class User {
  constructor(usersData, recipeRepository) {
    console.log(usersData)
    this.name = usersData.name
    this.id = usersData.id;
    this.pantry = new Pantry(usersData.pantry);
    this.savedRecipes = [];
    this.allRecipes = recipeRepository;
  };

//not hooked up to anything at the moment
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

///Eddie working on this
  filterAllByTag(recipeCategory) {
    let recipesByTag = [];
    this.allRecipes.recipes.filter((recipe) => {
      if (recipe.tags.toString().includes(recipeCategory.toLowerCase())) {
        recipesByTag.push(recipe)
      }
    })
    return recipesByTag
  };

//Eddie Working on this
  filterAllByName(recipeName) {
    let recipesByName = [];
   this.allRecipes.recipes.filter(recipe => {
      if (recipe.name.toLowerCase().includes(recipeName.toLowerCase())) {
        recipesByName.push(recipe)
      }
    });
    return recipesByName
  };

//not hooked up to anything at the moment
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
        renderCookBookCard(recipe)
      }
    })
  };


  removeRecipeFromList(recipeObject) {
    let getIndex = this.savedRecipes.indexOf(recipeObject);
    this.savedRecipes.splice(getIndex, 1);
  };
}












































// Colby and Marianne









export default User;