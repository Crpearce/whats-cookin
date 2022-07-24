import './styles.css';
import { fetchIngredientData,fetchRecipeData,fetchUserData } from './apiCalls';
import './images/turing-logo.png'
import './images/search-icon.svg'
import './images/logo.png'
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';

//global variables:
let recipeMatch;
let allRecipes;
let recipeRepository;
let user = null;
let randomCounter = 0;

// fetch promise
Promise.all([fetchIngredientData(), fetchRecipeData(), fetchUserData()]).then(([ingredientData, recipeData, userData]) => {
  allRecipes = recipeData.map(recipe => {
    return new Recipe(recipe, ingredientData);
  })
  recipeRepository = new RecipeRepository(allRecipes);
  user = new User(userData, recipeRepository);
  allRecipes.forEach(recipe => { 
    createRecipeCard(recipe);
  });
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
let homeButton = document.getElementById('homePage')
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

//eventHandlers:
function createRecipeCard(recipe) {
  randomCounter++;
  if (randomCounter <= 5) {
    let randomizedRecipe = allRecipes[getRandomRecipe(allRecipes)]
    renderRecipeCard(randomizedRecipe);
  };
};

// function renderRecipeCard(recipe) {
//   // console.log(recipe)
//   const {id,image,name} = recipe;
//     const saveButtonId = `${id}-save-recipe-button`;
//     const viewButtonId = `${id}-view-recipe-button`;
//     const recipeCardId = `${id}-recipe-card`;

//     homeRecipeList.innerHTML += `
//       <div class="recipe-card" id="${recipeCardId}" data-id="${id}">
//         <div class="recipe-image-box">
//           <img src=${image} alt="recipe image" class="recipe-display-image">
//         </div>
//         <h3>${name}</h3>
//           <button class="view-recipe-button" id="${viewButtonId}" data-id="${id}">View Recipe</button>
//           <button class="save-button" id="${saveButtonId}" data-id="${id}">Save Recipe</button>
//       </div>`

//     attachEventListenerToNewElement(saveButtonId, 'click', saveRecipe)
//     attachEventListenerToNewElement(viewButtonId, 'click', viewRecipeDetails)     
// }


function renderRecipeCard(recipe) {
  homeRecipeList.innerHTML += `
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

function renderCookBookCard(recipe) {
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

    attachEventListenerToNewElement(`${recipe.id}-view-recipeCOOKBOOK-button`, 'click', viewCookBookRecipeDetails)    
    attachEventListenerToNewElement(`${recipe.id}-delete-recipe-button`, 'click', deleteRecipe)
}

function attachEventListenerToNewElement(id, button, callbackFunction){
  setTimeout(()=> {
    document.getElementById(id).addEventListener(button, callbackFunction)
  }, 10)
}

// function viewRecipeIdeasDetails(event) {
//   homeRecipeList.innerHTML = ` `;
//   let recipeMatch = allRecipes.find((recipe) => {
//     if (recipe.id == event.target.closest(".recipe-card").id) {
//       return true
//     } else {
//       return false
//     }
//     return recipe.id == event.target.closest(".recipe-card").id
//   })
//   getIdeasView.innerHTML += `<h1>${recipeMatch.name}</h1>`
//   let printCost = recipeMatch.estimateIngredientCost();
//   getIdeasView.innerHTML += `<h3>COST $${printCost}</h3>`
//   let printDirections = recipeMatch.provideRecipeInstructions();
//   printDirections.forEach(step => {
//     getIdeasView.innerHTML += `<h3>${step}</h3>`
//   })
//   let printIngredients = recipeMatch.listIngredients();
//   printIngredients.forEach(ingredient => {
//     getIdeasView.innerHTML += `<h4>${ingredient}</h4>`
//   })
// };


function viewRecipeDetails(event) {
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
  recipeMatch = allRecipes.find((recipe) => recipe.id == event.target.dataset.id)
  renderCookBookRecipeDetails(recipeMatch)
}

function renderCookBookRecipeDetails(recipeMatch) {
  console.log('testing 1')
  savedRecipeDetailsView.innerHTML = ' ';
  show(savedRecipeDetailsView)
  console.log('testing 2')
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
  console.log('testing 3')
};


function saveRecipe(event) {
  hide(emptyCookBookMessage)
  recipeMatch = allRecipes.find((recipe) => recipe.id == event.target.dataset.id)
  renderCookBookCard(recipeMatch)

  // const id = event.target.dataset.id

  // SAVE for now... we will need this to make cards =>  user.addRecipeToCookbook()
};

function deleteRecipe() {

};

function showRecipeIdeas() {
  show(searchButtons)

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
  let foundRecipes = recipeMatch.forEach(recipe => {
    renderRecipeCard(recipe)
  })
  return foundRecipes
};

function filterAllRecipes() {
  let recipeMatch = user.filterAllByTag(searchTagBar.value)
  homeRecipeList.innerHTML = ` `
  let foundRecipes = recipeMatch.forEach(recipe => {
    renderRecipeCard(recipe)
  });
  return foundRecipes
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
