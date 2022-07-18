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

let randomCounter = 0;





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
// document.addEventListener('click', function(event) {
//   if (event.target && event.target.id == 'recipeTemplate') {
//     viewRecipeButton()
//   }
// })
viewRecipeButton.addEventListener('click', viewRecipeDetails);
searchNameBar.addEventListener('input', searchAllRecipes)
searchTagBar.addEventListener('input', filterAllRecipes)
recipeIdeasView.addEventListener('click', viewRecipeDetails)

// savedRecipesOptionButton.addEventListener('click', showSavedRecipes);
// allRecipesContainer.addEventListener('click', openRecipeDetail);
// savedRecipesView.addEventListener('dblclick', deleteSavedRecipes);
recipeList.addEventListener('click', viewRecipeDetails);

//we need a button on the recipe page to save
//eventHandlers:

//
function openRecipeDetail() {
  if (user === null) {
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
  randomCounter++
  if (randomCounter <= 5) {
    let randomizedRecipe = allRecipes[getRandomRecipe(allRecipes)]
    recipeList.innerHTML += `<div class="recipe-card" id="${randomizedRecipe.id}">
    <div class="recipe-image-box">
      <img src=${randomizedRecipe.image} alt="recipe image" class="recipe-display-image">
    </div>
    <h3>${randomizedRecipe.name}</h3>
    <button class="view-recipe-button id="recipe-${randomizedRecipe.id}">View Recipe</button>
    <button class="save-button">Save Recipe</button>
    <button class="delete-button hidden">Delete Recipe</button>
    </div>`
    // return randomizedRecipe
  }
}

function viewRecipeDetails(event) {
recipeList.innerHTML = ` `  

for(var i = 0; i < allRecipes.length; i++){
  if(allRecipes[i].id == event.target.closest(".recipe-card").id){
        recipeList.innerHTML += `<h1>${allRecipes[i].name}</h1>`    
    }
  }

for(var i = 0; i < allRecipes.length; i++){
  if(allRecipes[i].id == event.target.closest(".recipe-card").id){    
  let printCost = allRecipes[i].estimateIngredientCost();
        recipeList.innerHTML += `<h3>COST $${printCost}</h3>`
    }
  }
  for(var i = 0; i < allRecipes.length; i++){
    if(allRecipes[i].id == event.target.closest(".recipe-card").id){
     
      let printDirections = allRecipes[i].provideRecipeInstructions();
        printDirections.forEach(step => {
        recipeList.innerHTML += `<h3>${step}</h3>`
        }
      )
    }
  }

  for(var i = 0; i < allRecipes.length; i++){
    if(allRecipes[i].id == event.target.closest(".recipe-card").id){   
    let printIngredients = allRecipes[i].listIngredients();
    printIngredients.forEach(ingredient => {
          recipeList.innerHTML += `<h4>${ingredient}</h4>`
          }
        )
      }
    }
};


function showRecipeIdeas() {
  console.log(recipeTemplate.closest('recipeContainer'))
  allRecipes.forEach(recipe => {
    createRecipeIdeas(recipe)
    show(recipeIdeasView)
    hide(recipeList)
    hide(searchButtons)
  })
}


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