import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search-icon.svg'
import './images/logo.png'
// import '.images/calum-lewis-vA1L1jRTM70-unsplash.jpg'
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/sample-recipes';
import ingredientData from '../src/data/sample-ingredients';


//global variables:

let allRecipes = recipeData.map(recipe => {
  return new Recipe(recipe, ingredientData);
})
const recipeRepository = new RecipeRepository(allRecipes);
let user;







//query selectors:
let ideasOption = document.getElementById('userOptionIdeas');
let savedRecipesOption = document.getElementById('userOptionSavedRecipes');
let searchNameButton = document.getElementById('query1');
let searchTagButton = document.getElementById('query2');
let recipeIdeasView = document.getElementById('recipeIdeasView');
let savedRecipesView = document.getElementById('savedRecipesView');
let recipeList = document.getElementById('recipeList');
let h3 = document.getElementById('test');












//eventListeners:
window.addEventListener('load', generateRecipes);
// ideasOption.addEventListener('click', randomizedRecipeIdeas);
// savedRecipesOption.addEventListener('click', seeSavedRecipes);
// savedRecipesView.addEventListener('dblclick', deleteSavedRecipes);
// recipeList.addEventListener('load', );

//we need a button on the recipe page to save
//eventHandlers:

//
function generateRecipes() {

  let getRecipes = recipeRepository.recipes.map(recipe => {
    console.log(recipe.name)
    return recipe.name;
  });

  h3.innerText = getRecipes;
}
console.log(recipeRepository)


console.log('Hello world');













//Colby'space and Marianne







































//Eddie's Space






















































