import { renderCookBookCard } from '../scripts';
import Pantry from './Pantry';

class User {
  constructor(usersData, recipeRepository) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = new Pantry(usersData.pantry);
    this.savedRecipes = [];
    this.allRecipes = recipeRepository;
  };

  filterAllByTag(recipeCategory) {
    let recipesByTag = [];
    this.allRecipes.recipes.filter((recipe) => {
      if (recipe.tags.toString().includes(recipeCategory.toLowerCase())) {
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

export default User;
