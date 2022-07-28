import './styles.css';
import { fetchData } from './apiCalls';
import './images/turing-logo.png'
import './images/search-icon.svg'
import './images/logo.png'
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Pantry from '../src/classes/Pantry';

//global variables:
let recipeMatch;
let allRecipes;
let recipeRepository;
let user;
let randomCounter = 0;

// fetch promise
Promise.all([fetchData('ingredients'), fetchData('recipes'), fetchData('users')])
.then(([ingredientObj, recipeObj, userObj]) => {
  allRecipes = recipeObj.recipeData.map(recipe => {
    return new Recipe(recipe, ingredientObj.ingredientsData);
  })
  recipeRepository = new RecipeRepository(allRecipes);
  user = new User(userObj.usersData[Math.floor(Math.random() * 49)], recipeRepository);
  console.log(user)
  allRecipes.forEach(recipe => {
    createRecipeCard(recipe);
  });
  hide(homeButton)
});

//query selectors:
document.getElementsByClassName('save-button')
let homeView = document.getElementsByClassName('main-view')
let getIdeasButton = document.getElementById('getIdeas');
let cookBookContainer = document.getElementById('cookBookContainer');
let yourCookbook = document.getElementById('yourCookbook');
let searchButtons = document.getElementById('searchButtons');
let emptyCookBookMessage = document.getElementById('emptyCookBookMessage');
let titleBanner = document.getElementById('titleBanner');
let goToCookBook = document.getElementById('goToCookBook');
let searchNameBar = document.getElementById('searchNameBar');
let searchTagBar = document.getElementById('searchTagBar');
let getIdeasView = document.getElementById('getIdeasView');
let savedRecipeCards = document.getElementById('savedRecipeCards');
let homeRecipeList = document.getElementById('recipeList');
let viewRecipeButton = document.getElementById('recipeContainer')
let homeButton = document.getElementById('homePageBtn')
let savedRecipeDetailsView = document.getElementById('savedRecipeDetailsView')


//eventListeners:
getIdeasButton.addEventListener('click', showRecipeIdeas);
homeButton.addEventListener('click', showHomepage);
searchNameBar.addEventListener('input', searchAllRecipes);//consider invoking with a button?  need to clear input after search
searchTagBar.addEventListener('input', filterAllRecipes);//consider invoking with a button?  need to clear input after search
// getIdeasView.addEventListener('click', viewRecipeIdeasDetails);// will still need??
goToCookBook.addEventListener('click', showCookBook);
// recipeList.addEventListener('click', viewRecipeDetails);
// recipeList.addEventListener('click', saveRecipe);
// viewRecipeButton.addEventListener('click', viewRecipeDetails);
// allRecipesContainer.addEventListener('click', openRecipeDetail);
// savedRecipeCards.addEventListener('dblclick', deleteSavedRecipes);
function attachEventListenerToNewElement(id, button, callbackFunction){
  setTimeout(()=> {
   document.getElementById(id).addEventListener(button, callbackFunction)
  }, 10)
}

function renderErrorMessage(message) {
  homeRecipeList.innerHTML += `<h2>${message}</h2>`
}

//eventHandlers:
function createRecipeCard(recipe) {
  randomCounter++;
  if (randomCounter <= 5) {
    let randomizedRecipe = allRecipes[getRandomRecipe(allRecipes)]
    renderRecipeCard(randomizedRecipe);
  };
};

function renderRecipeCard(recipe) {
  homeRecipeList.innerHTML += `
      <div class="recipe-card" id="${recipe.id}-recipe-card" data-id="${recipe.id}">
        <div class="recipe-image-box">
          <img src=${recipe.image} alt="${recipe.name}" class="recipe-display-image">
        </div>
        <h2>${recipe.name}</h2>
          <button class="view-recipe-button" id="${recipe.id}-view-recipe-button" data-id="${recipe.id}">View Recipe</button>
          <button class="save-button" id="${recipe.id}-save-recipe-button" data-id="${recipe.id}">Save To Cookbook</button>
      </div>`

    attachEventListenerToNewElement(`${recipe.id}-view-recipe-button`, 'click', viewRecipeDetails)
    attachEventListenerToNewElement(`${recipe.id}-save-recipe-button`, 'click', saveRecipe)
}

function renderAllRecipeCards(recipe) {
  getIdeasView.innerHTML += `
      <div class="recipe-card" id="${recipe.id}-recipe-card" data-id="${recipe.id}">
        <div class="recipe-image-box">
          <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
        </div>
        <h3>${recipe.name}</h3>
          <button class="view-recipe-button" id="${recipe.id}-view-recipe-button" data-id="${recipe.id}">View Recipe</button>
          <button class="save-button" id="${recipe.id}-save-recipe-button" data-id="${recipe.id}">Save To Cookbook</button>
      </div>`

    attachEventListenerToNewElement(`${recipe.id}-view-recipe-button`, 'click', viewRecipeDetails)
    attachEventListenerToNewElement(`${recipe.id}-save-recipe-button`, 'click', saveRecipe)
}

function viewRecipeDetails(event) {
  show(goToCookBook)
  show(homeButton)
  show(getIdeasButton)
  searchNameBar.value = null;
  searchTagBar.value = null;
  hide(searchButtons)
  show(homeRecipeList)
  hide(getIdeasView)
  hide(cookBookContainer)
  homeRecipeList.innerHTML = ` `;
  recipeMatch = allRecipes.find((recipe) => recipe.id == event.target.dataset.id)
  renderRecipeDetails(recipeMatch)
}

function renderRecipeDetails(recipeMatch) {
  hide(titleBanner)
  homeRecipeList.innerHTML +=
  `<div class="recipe-image-box">
   <img src=${recipeMatch.image} alt="recipe image" class="recipe-display-image">
  </div>`
  homeRecipeList.innerHTML += `
  <h1>${recipeMatch.name}    <button class="save-button" id="${recipeMatch.id}-save-recipe-button" data-id="${recipeMatch.id}">Save To Cookbook</button></h1>
  `
  attachEventListenerToNewElement(`${recipeMatch.id}-save-recipe-button`, 'click', saveRecipe)
  let printCost = recipeMatch.estimateIngredientCost();
  homeRecipeList.innerHTML += `<h3>COST $${printCost}</h3>`
  homeRecipeList.innerHTML += '<h1> Directions </h1>'
  let printDirections = recipeMatch.provideRecipeInstructions();
  printDirections.forEach(step => {
    homeRecipeList.innerHTML += `<h3>${step}</h3>`
  });
  homeRecipeList.innerHTML += '<h1> Ingredients </h1>'
  let printIngredients = recipeMatch.listIngredients();
  printIngredients.forEach(ingredient => {
    homeRecipeList.innerHTML += `<h4>${ingredient}</h4>`
  });
};



function viewCookBookRecipeDetails(event) {
  hide(savedRecipeCards)
  hide(getIdeasView)
  hide(homeRecipeList)
  show(goToCookBook)
  recipeMatch = allRecipes.find((recipe) => recipe.id == event.target.id)

  renderCookBookRecipeDetails(recipeMatch)
}

function renderCookBookRecipeDetails(recipeMatch) {
  savedRecipeDetailsView.innerHTML = ' ';
  show(savedRecipeDetailsView)
  savedRecipeDetailsView.innerHTML +=
  `<div class="recipe-image-box">
   <img src=${recipeMatch.image} alt="recipe image" class="recipe-display-image">
  </div>`
  savedRecipeDetailsView.innerHTML += `<h1>${recipeMatch.name}</h1>`
  let printCost = recipeMatch.estimateIngredientCost();
  savedRecipeDetailsView.innerHTML += `<h3>COST $${printCost}</h3>`
  savedRecipeDetailsView.innerHTML += '<h1> Directions </h1>'
  let printDirections = recipeMatch.provideRecipeInstructions();
  printDirections.forEach(step => {
    savedRecipeDetailsView.innerHTML += `<h3>${step}</h3>`
  });
  savedRecipeDetailsView.innerHTML += '<h1> Ingredients </h1>'
  let printIngredients = recipeMatch.listIngredients();
  printIngredients.forEach(ingredient => {
    savedRecipeDetailsView.innerHTML += `<h4>${ingredient}</h4>`
  });
};


function saveRecipe(event) {
  console.log('Add 1 recipe to users saved recipes', user)
  hide(emptyCookBookMessage)
  recipeMatch = allRecipes.find((recipe) => recipe.id == event.target.dataset.id)
  user.addRecipeToCookbook(recipeMatch.name)
};

function deleteRecipe(event) {
  console.log('2 after delete', user)
  event.preventDefault()
  recipeMatch = allRecipes.find((recipe)=> recipe.id == event.target.id)
  user.removeRecipeFromList(recipeMatch)
  let removeRecipeCard = event.path[2]
  removeRecipeCard.remove()
  if(user.savedRecipes.length === 0) {
    show(emptyCookBookMessage)
  }
}

function renderCookBookCard(recipe) {
  // debugger
  console.log(recipe)
  let cookBookCard = document.createElement('figure');
  cookBookCard.classList.add('cook-book-card-container');
  cookBookCard.setAttribute('id', `cookBookCardContainer`);
  cookBookCard.innerHTML = `
      <div class="recipe-card" id="${recipe.id}-recipeCOOKBOOK-card" data-id="${recipe.id}">
        <div class="recipe-image-box">
          <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
        </div>
        <h3>${recipe.name}</h3>
        <button class="view-recipeCOOKBOOK-button" id="${recipe.id}">View Recipe</button>
        <button class="delete-button" id="${Date.now()}">Delete</button>
      </div>`;
      attachEventListenerToNewElement(`${Date.now()}`, 'click', deleteRecipe)
      attachEventListenerToNewElement(`${recipe.id}`, 'click', viewCookBookRecipeDetails)
      document.querySelectorAll('#cookBookCardContainer');
      savedRecipeCards.appendChild(cookBookCard)
}

function showRecipeIdeas() {
  searchNameBar.value = null;
  searchTagBar.value = null;
  show(searchButtons)
  show(goToCookBook)
  hide(getIdeasButton)
  show(homeButton)
  hide(titleBanner)
  getIdeasView.innerHTML = `<section class="get-ideas-container" id="getIdeasBanner" >
  <h1>All Recipes</h1>
 </section>`
  show(getIdeasView);
  hide(homeRecipeList)
  hide(cookBookContainer);
  allRecipes.forEach(recipe => {
    renderAllRecipeCards(recipe)
  });
};

function showHomepage() {
  show(getIdeasButton)
  show(goToCookBook)
  hide(homeButton)
  searchNameBar.value = null;
  searchTagBar.value = null;
  show(searchButtons)
  show(titleBanner)
  homeView.innerHTML = `<section class="title-container" id="titleBanner" >
  <h1>What's Cookin'</h1>
 </section>`
  randomCounter = 0;
  homeRecipeList.innerHTML = ' ';
  show(homeRecipeList);
  hide(getIdeasView);
  allRecipes.forEach(recipe => {
    createRecipeCard(recipe)
  });
  hide(cookBookContainer);
};

function showCookBook() {

  show(getIdeasButton)
  show(homeButton)
  hide(goToCookBook)
  searchNameBar.value = null;
  searchTagBar.value = null;
  show(searchButtons)

  homeRecipeList.innerHTML = ' ';
  show(yourCookbook)
  hide(titleBanner)
  hide(homeRecipeList);
  hide(getIdeasView);
  savedRecipeDetailsView.innerHTML = '';
  // hide(savedRecipeDetailsView)
  show(cookBookContainer);
  show(savedRecipeCards)
};

function searchAllRecipes() {
  let recipeMatch = user.filterAllByName(searchNameBar.value)
  homeRecipeList.innerHTML = ` `
  if(recipeMatch.length === 0) {
    renderErrorMessage('No recipes found')
  } else {
    recipeMatch.forEach(recipe => {
      renderRecipeCard(recipe)
    })
  }
};

function filterAllRecipes() {
  let recipeMatch = user.filterAllByTag(searchTagBar.value)
  homeRecipeList.innerHTML = ` `
  if(recipeMatch.length === 0) {
    renderErrorMessage('No recipes found')
  } else {
    recipeMatch.forEach(recipe => {
      renderRecipeCard(recipe)
    })
  }
};

function getRandomRecipe(allRecipes) {
  return Math.floor(Math.random() * allRecipes.length);
};

function show(e) {
  e.classList.remove('hidden')
};

function hide(e) {
  e.classList.add('hidden')
};













































































function generateUserPantry (user) {
  

}

export {viewCookBookRecipeDetails , deleteRecipe, attachEventListenerToNewElement, renderCookBookCard}