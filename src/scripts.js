import './styles.css';
import { fetchData } from './apiCalls';
import './images/turing-logo.png';
import './images/search-icon.svg';
// import './images/logo.png';
import './images/nav_background2.jpg';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/RecipeRepository';
import Pantry from '../src/classes/Pantry';

//global variables:
let recipeMatch;
let allRecipes;
let recipeRepository;
let user;
let ingredientNames = [];
let randomCounter = 0;
let ingredientsDATA;
let pantryInfo;


// fetch promise(s)




// //  This is the promise all for running on the local server

Promise.all([fetchData('ingredients'), fetchData('recipes'), fetchData('users')])
.then(([ingredientsData, recipeData, usersData]) => {
  ingredientsDATA = ingredientsData;
  allRecipes = recipeData.map(recipe => {
    return new Recipe(recipe, ingredientsData);
  })


  recipeRepository = new RecipeRepository(allRecipes);

  user = new User(usersData[16], recipeRepository);

  // user = new User(usersData[Math.floor(Math.random() * 49)], recipeRepository);


  allRecipes.forEach(recipe => {
    createRecipeCard(recipe);
  });
  hide(homeButton)
});



//query selectors:
document.getElementsByClassName('save-button')
let homeView = document.getElementsByClassName('main-view')
let getIdeasButton = document.getElementById('getIdeas');
let yourCookbook = document.getElementById('yourCookbook');
let yourPantry = document.getElementById('pantry');
let pantryHeader = document.getElementById('pantryHeader');
let pantryIngredientList = document.getElementById('pantryIngredients');

// user-submits
// let pantryAmountsNumber = document.getElementById('pantryAmounts');

// let qtyInPantry = pantryIngredientList.children;
let cookBookContainer = document.getElementById('cookBookContainer');
let searchButtons = document.getElementById('searchButtons');
let emptyCookBookMessage = document.getElementById('emptyCookBookMessage');
let titleBanner = document.getElementById('titleBanner');
let goToCookBook = document.getElementById('goToCookBook');
let goToPantry = document.getElementById('goToPantry');
let addIngredientBar = document.getElementById('addIngredientBar');
let addIngredientQty = document.getElementById('addIngredientQty');

let addIngredientToPantryBtn = document.getElementById('addIngredientToPantryBtn');
let searchNameBar = document.getElementById('searchNameBar');
let searchTagBar = document.getElementById('searchTagBar');
let getIdeasView = document.getElementById('getIdeasView');
let savedRecipeCards = document.getElementById('savedRecipeCards');
let homeRecipeList = document.getElementById('recipeList');
let homeButton = document.getElementById('homePageBtn')
let savedRecipeDetailsView = document.getElementById('savedRecipeDetailsView')
let pantryContainer = document.getElementById('pantryContainer')
let pantryListContainer = document.getElementById('listContainer')

//eventListeners:
window.onload = function () {
  listUsersIngredients()
  // showModal()
}

// addIngredientBar.addEventListener('keypress', (event) => {
//   if(event === 13){
//     addToPantryPage()
//   }
// })
getIdeasButton.addEventListener('click', showRecipeIdeas);
homeButton.addEventListener('click', showHomepage);
goToPantry.addEventListener('click', showPantry)
searchNameBar.addEventListener('input', searchAllRecipes);
searchTagBar.addEventListener('input', filterAllRecipes);
addIngredientToPantryBtn.addEventListener('click', handleButtons)
pantryContainer.addEventListener('click', handleButtons)

getIdeasView.addEventListener('click', handleButtons);
goToCookBook.addEventListener('click', showCookBook);
// pantryListContainer.addEventListener('click', showCookBook);
// pantryIngredientList.addEventListener('click', handleButtons)
homeRecipeList.addEventListener('click', handleButtons);
savedRecipeCards.addEventListener('click', handleButtons);

function renderErrorMessage(message) {
  homeRecipeList.innerHTML += `<h2>${message}</h2>`
}


function handleButtons(event) {

  switch (event.target.className) {
    case "view-recipe-button":
      viewRecipeDetails(event)
      break;
      case "view-COOKBOOK-recipe":
        viewCookBookRecipeDetails(event)
        break;
    case "save-button":
      saveRecipe(event)
      break;
    case "delete-button":
      deleteRecipe(event)
      break;

    case "add-qty-to-ingregedient-btn":

      addIngredient(event)
      break;  


    case "remove-qty-from-ingregedient-btn":
      removeIngredient(event)
    break;

    case "user-submits":
      convertStringToId(event)
      break;
  default:
      break;
  }
}

function convertStringToId (event){
  event.preventDefault()

  if(addIngredientBar.value === '' || addIngredientQty.value === NaN || addIngredientQty.value === ''){
    pantryHeader.innerHTML += `<p>${addIngredientBar.value} is not a valid entry </p>`
    return
  } 
 
let makeLowercase = addIngredientBar.value.toLowerCase();
let findInputObject = ingredientsDATA.find(ingredient => {
  return ingredient.name === makeLowercase
})


let inputId = findInputObject.id
  packageUsersIngredient(inputId)
}


function packageUsersIngredient(inputId) {

  console.log("what is this?" , addIngredientQty.value)
 let newIngredient = {
    userID: user.id,
    ingredientID: inputId,
    ingredientModification: parseInt(addIngredientQty.value)
  };
  addIngredientBar.value = null;
  addIngredientQty.value = null;
  addToPantry(newIngredient)
}

function addIngredient(event, number) {
  event.preventDefault()
  let newIngredient = {
    userID: user.id,
    ingredientID: parseInt(event.target.id),
    ingredientModification: number || 1
  };
  updatePantry(newIngredient, event)
}


function removeIngredient(event, number) {
  console.log(event)
  event.preventDefault()
  let newIngredient = {
    userID: user.id,
    ingredientID: parseInt(event.target.id),
    ingredientModification: number ||  -1
  };
  updatePantry(newIngredient, event)
}

function updatePantry(newIngredient, event) {
  event.preventDefault()
  fetch("http://localhost:3001/api/v1/users", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIngredient)
  })
  .then(response => {if(!response.ok) {throw new Error(response.statusText) } else {return response.json()}})
  .then(data => fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .catch(error => yourPantry.innerHTML += `<p>${error.message}</p>`)
  )
  .catch(error => yourPantry.innerHTML += `<p>${error.message}</p>`)
}    

// //THIS IS FOR AN EXAMPLE
////+function postOnPage () {

//   fetch('http://localhost:3001/api/v1/users', {
//       method: 'POST',
//       body: JSON.stringify(obj),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(response => response.json())
//   .then(data => fetch('http://localhost:3001/api/v1/users')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err))  
//   )
//   .catch(err => console.log(err))
// //}

function addToPantry(newIngredient) {
  event.preventDefault()
  fetch("http://localhost:3001/api/v1/users", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIngredient)
  })
  .then(response => {
    if(!response.ok) {
      throw new Error(response.statusText)
    } else {
    return response.json()}})

  .then(newIngredient =>  addToPantryPage(newIngredient))
  .catch(error => 

    yourPantry.innerHTML += `<p>${error.message}</p>`
    )
}

function addToPantryPage(newIngredient) {
  console.log(newIngredient)
    pantryHeader.innerHTML = ''
    pantryIngredientList.innerHTML += `<li >Ingredient: ${addIngredientBar.value}
    --->amount:${addIngredientQty.value}
    <button class="add-qty-to-ingregedient-btn">Add +1</button>
    <button class="remove-qty-from-ingregedient-btn">Remove 1</button>
  </li>`
    
  
}

//eventHandlers:
function createRecipeCard(recipe) {
  randomCounter++;
  if (randomCounter <= 3) {
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
}

function renderAllRecipeCards(recipe) {
  getIdeasView.innerHTML += `
      <div class="recipe-card" id="${recipe.id}-recipe-card" data-id="${recipe.id}">
        <div class="recipe-image-box">
          <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
        </div>
        <section class="recipe-title">${recipe.name}</section>
          <button class="view-recipe-button" id="${recipe.id}-view-recipe-button" data-id="${recipe.id}">View Recipe</button>
          <button class="save-button" id="${recipe.id}-save-recipe-button" data-id="${recipe.id}">Save To Cookbook</button>
      </div>`
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
  user.pantry.checkForIngredients(recipeMatch, allRecipes)
  renderRecipeDetails(recipeMatch)
}

function renderRecipeDetails(recipeMatch) {
  hide(titleBanner)
  homeRecipeList.innerHTML +=
  `<div class="recipe-image-box">
  '<section class="pantry-check"><i>${user.pantry.checkForIngredients(recipeMatch, allRecipes)}<i></section>'
   <img src=${recipeMatch.image} alt="recipe image" class="recipe-display-image">
  </div>`
  homeRecipeList.innerHTML += `
  <h1>${recipeMatch.name}    <button class="save-button" id="${recipeMatch.id}-save-recipe-button" data-id="${recipeMatch.id}">Save To Cookbook</button></h1>
  `
  let printCost = recipeMatch.estimateIngredientCost();
  homeRecipeList.innerHTML += `<h3> Cost: $${printCost}</h3>`
  homeRecipeList.innerHTML += '<h3> Directions </h3>'
  let printDirections = recipeMatch.provideRecipeInstructions();
  printDirections.forEach(step => {
    homeRecipeList.innerHTML += `<h4>${step}</h4>`
  });
  homeRecipeList.innerHTML += '<h3> Ingredients </h3>'
  let printIngredients = recipeMatch.listIngredients();
  printIngredients.forEach(ingredient => {
    homeRecipeList.innerHTML += `<li>${ingredient}</li>`
  });
};

function viewCookBookRecipeDetails(event) {
  hide(savedRecipeCards)
  hide(getIdeasView)
  hide(homeRecipeList)
  show(goToCookBook)
  recipeMatch = allRecipes.find((recipe) => recipe.id == event.target.dataset.id)
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
  savedRecipeDetailsView.innerHTML += '<h3> Directions </h3>'
  let printDirections = recipeMatch.provideRecipeInstructions();
  printDirections.forEach(step => {
    savedRecipeDetailsView.innerHTML += `<h4>${step}</h4>`
  });
  savedRecipeDetailsView.innerHTML += '<h3> Ingredients </h3>'

  let printIngredients = recipeMatch.listIngredients();
  printIngredients.forEach(ingredient => {
    savedRecipeDetailsView.innerHTML += `<li>${ingredient}</li>`
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
        <section class="recipe-title">${recipe.name}</section>
        <button class="view-COOKBOOK-recipe" id="${recipe.id}-view-recipe-button" data-id="${recipe.id}">View Recipe</button>
        <button class="delete-button">Delete</button>
      </div>`;
      document.querySelectorAll('#cookBookCardContainer');
      savedRecipeCards.appendChild(cookBookCard)
}

function showRecipeIdeas() {
  searchNameBar.value = null;
  searchTagBar.value = null;
  hide(yourPantry)
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
  hide(yourPantry)
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


function listUsersIngredients() {
  let usersPantry = user.pantry.pantryContents
 pantryInfo = usersPantry.map(ingredient => {
   return {id: ingredient.ingredient,  amount: ingredient.amount}
  }
);
pantryInfo.forEach(ingredientObj => {
    ingredientsDATA.forEach(ingredient => {
      if (ingredient.id === ingredientObj.id) {
        ingredientNames.push(ingredient.name)
        pantryIngredientList.innerHTML += `<li id="${ingredient.id}-listItem">Ingredient: ${ingredient.name} --->amount:${ingredientObj.amount}
        <button id="${ingredient.id}"class="add-qty-to-ingregedient-btn">Add +1</button>
        <button id="${ingredient.id}" class="remove-qty-from-ingregedient-btn">Remove 1</button>
        </li>`
      }
    })
  })
};



function showPantry(){
  hide(savedRecipeCards)
  // hide(cookBookCard)
  show(yourPantry)
  hide(homeRecipeList);
  hide(getIdeasView);
  hide(yourCookbook)
  hide(titleBanner)
  show(homeButton)
  hide(getIdeasView);
  hide(homeRecipeList)
  hide(cookBookContainer);
}

function showCookBook() {
  hide(yourPantry)
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


export {viewCookBookRecipeDetails , deleteRecipe,  renderCookBookCard}
