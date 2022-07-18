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
let user = null;







//query selectors:
let ideasOptionButton = document.getElementById('userOptionIdeas');
let savedRecipesOptionButton = document.getElementById('userOptionSavedRecipes');
let searchNameBar = document.getElementById('query1');
let searchTagBar = document.getElementById('query2');
let recipeIdeasView = document.getElementById('recipeIdeasView');
let savedRecipesView = document.getElementById('savedRecipesView');
let recipeList = document.getElementById('recipeList');
let searchButtons = document.getElementById('searchButtons');
let viewRecipeButton = document.getElementById('recipeContainer')













//eventListeners:
window.addEventListener('load', openRecipeDetail);
ideasOptionButton.addEventListener('click', showRecipeIdeas);
viewRecipeButton.addEventListener('click', viewRecipeDetails);
searchNameBar.addEventListener('input', searchAllRecipes)
searchTagBar.addEventListener('input', filterAllRecipes)

// savedRecipesOptionButton.addEventListener('click', showSavedRecipes);
// allRecipesContainer.addEventListener('click', openRecipeDetail);
// savedRecipesView.addEventListener('dblclick', deleteSavedRecipes);
// recipeList.addEventListener('load', );

//we need a button on the recipe page to save
//eventHandlers:

//
function openRecipeDetail() {
  if(user === null) {
      user = new User(recipeRepository)
    }
  // console.log(allRecipes)
  allRecipes.forEach(recipe => {
  createRecipe(recipe)
  // recipeList.innerHTML(recipeCard);
})
}
















//Colby'space and Marianne

function createRecipe(recipe) {
  let randomizedRecipe = allRecipes[getRandomRecipe(allRecipes)]
  recipeList.innerHTML += `<div class="recipe-card recipe-${randomizedRecipe.id}" id="recipe-${randomizedRecipe.id}">
    <div class="recipe-image-box">
      <img src=${randomizedRecipe.image} alt="recipe image" class="recipe-display-image">
    </div>
    <h3>${randomizedRecipe.name}</h3>
    <button class="view-recipe-button">View Recipe</button>
    <button class="save-button">Save Recipe</button>
    <button class="delete-button hidden">Delete Recipe</button>
    </div>`
    return randomizedRecipe
}

function createRecipeIdeas(recipe) {
  let randomizedRecipe = allRecipes
  // if(randomizedRecipe !== recipe)
  recipeIdeasView.innerHTML += `<div class="recipe-card recipe-${recipe.id}" id="recipe-${recipe.id}">
    <div class="recipe-image-box">
      <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
    </div>
    <h3>${recipe.name}</h3>
    <button class="view-recipe-button">View Recipe</button>
    <button class="save-button">Save Recipe</button>
    <button class="delete-button hidden">Delete Recipe</button>

    </div>`
    return randomizedRecipe
  //
}

function showRecipeIdeas(){
  console.log('test')
  allRecipes.forEach(recipe => {
  createRecipeIdeas(recipe)
  show(recipeIdeasView)
  hide(recipeList)
  hide(searchButtons)
})
}


function viewRecipeDetails() {
  let recipeDisplay = recipeContainer.innerHTML += `
    <h3>${recipe.name}</h3>
    <div class="recipe-id recipe-${recipe.id}" id="recipe-${recipe.id}">
    <div class="recipe-image-box">
      <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
    </div>
    <div class="recipe-ingredients"${recipe.ingredients}</div>
    <div class="recipe-instructions"${recipe.instructions}</div>
    <div class="recipe-tags"${recipe.tags}</div>
    <button class="view-recipe-button hidden">View Recipe</button>
    <button class="save-button">Save Recipe</button>
    <button class="delete-button hidden">Delete Recipe</button>
    </div>`
    return recipeDisplay
};
//
// function eliminateDuplicateRecipes(){
//   let uniqueRecipes = [];
//   if(!uniqueRecipes.includes(recipe))
//   uniqueRecipes.push(recipe)
//
// }
// function deleteSavedRecipes () {
//   user.removeRecipeFromList(recipeObject)
// }

function getRandomRecipe(allRecipes) {
  return Math.floor(Math.random() * allRecipes.length);
};



function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}


































//Eddie's Space
function searchAllRecipes() {
  let recipeMatch = user.filterAllByName(searchNameBar.value)
  recipeList.innerHTML = ` `
  let test = recipeMatch.forEach(recipe => {
    recipeList.innerHTML += `<div class="recipe-card recipe-${recipe.id}" id="recipe-${recipe.id}">
      <div class="recipe-image-box">
        <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
      </div>
      <h3>${recipe.name}</h3>
      <button class="view-recipe-button">View Recipe</button>
      <button class="save-button">Save Recipe</button>
      <button class="delete-button hidden">Delete Recipe</button>

      </div>`
    })
    return test
}

function filterAllRecipes() {
  let recipeMatch = user.filterAllByTag(searchTagBar.value)
  recipeList.innerHTML = ` `
  let test1 = recipeMatch.forEach(recipe => {
    recipeList.innerHTML += `<div class="recipe-card recipe-${recipe.id}" id="recipe-${recipe.id}">
      <div class="recipe-image-box">
        <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
      </div>
      <h3>${recipe.name}</h3>
      <button class="view-recipe-button">View Recipe</button>
      <button class="save-button">Save Recipe</button>
      <button class="delete-button hidden">Delete Recipe</button>

      </div>`
    })
    return test1
}