import './styles.css';
import { fetchIngredientData,fetchRecipeData,fetchUserData } from './apiCalls';
import './images/turing-logo.png'
import './images/search-icon.svg'
import './images/logo.png'
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';

//global variables:
let currentRecipe;
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
    createRecipe(recipe);
  });
});

//query selectors:
document.getElementsByClassName('save-button')
let ideasOptionButton = document.getElementById('userOptionIdeas');
let savedRecipesButton = document.getElementById('savedRecipesButton');
let searchNameBar = document.getElementById('query1');
let searchTagBar = document.getElementById('query2');
let recipeIdeasView = document.getElementById('recipeIdeasView');
let savedRecipesView = document.getElementById('savedRecipesView');
let recipeList = document.getElementById('recipeList');
let searchButtons = document.getElementById('searchButtons');
let viewRecipeButton = document.getElementById('recipeContainer')
let homeButton = document.getElementById('homePage')

//eventListeners:
ideasOptionButton.addEventListener('click', showRecipeIdeas);
homeButton.addEventListener('click', showHomepage);
searchNameBar.addEventListener('input', searchAllRecipes);
searchTagBar.addEventListener('input', filterAllRecipes);
recipeIdeasView.addEventListener('click', viewRecipeIdeasDetails);
savedRecipesButton.addEventListener('click', showSavedView);
recipeList.addEventListener('click', viewRecipeListDetails);
recipeList.addEventListener('click', saveRecipe);
// viewRecipeButton.addEventListener('click', viewRecipeDetails);
// allRecipesContainer.addEventListener('click', openRecipeDetail);
// savedRecipesView.addEventListener('dblclick', deleteSavedRecipes);

//eventHandlers:
function createRecipe(recipe) {
  randomCounter++;
  if (randomCounter <= 5) {
    let randomizedRecipe = allRecipes[getRandomRecipe(allRecipes)]
    recipeList.innerHTML += `
    <div class="recipe-card" id="${randomizedRecipe.id}">
    <div class="recipe-image-box">
      <img src=${randomizedRecipe.image} alt="recipe image" class="recipe-display-image">
    </div>
    <h3>${randomizedRecipe.name}</h3>
      <button class="view-recipe-button" id="${randomizedRecipe.id}">View Recipe</button>
      <button class="save-button" id="${randomizedRecipe.id}">Save Recipe</button>
    </div>`
  };
};

function viewRecipeIdeasDetails(event) {
  recipeList.innerHTML = ` `;
  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".recipe-card").id) {
      recipeList.innerHTML += `<h1>${allRecipes[i].name}</h1>`
    };
  };

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".recipe-card").id) {
      let printCost = allRecipes[i].estimateIngredientCost();
      recipeList.innerHTML += `<h3>COST $${printCost}</h3>`
    };
  };

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".recipe-card").id) {
      let printDirections = allRecipes[i].provideRecipeInstructions();
      printDirections.forEach(step => {
        recipeList.innerHTML += `<h3>${step}</h3>`
      });
    };
  };

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".recipe-card").id) {
      let printIngredients = allRecipes[i].listIngredients();
      printIngredients.forEach(ingredient => {
        recipeList.innerHTML += `<h4>${ingredient}</h4>`
      })
    }
  };
};

function viewRecipeListDetails(event) {
  recipeList.innerHTML = ` `;
  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".view-recipe-button").id) {
      recipeList.innerHTML += `<h1>${allRecipes[i].name}</h1>`;
    };
  };

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".view-recipe-button").id) {
      let printCost = allRecipes[i].estimateIngredientCost();
      recipeList.innerHTML += `<h3>COST $${printCost}</h3>`
    };
  };

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".view-recipe-button").id) {
      let printDirections = allRecipes[i].provideRecipeInstructions();
      printDirections.forEach(step => {
        recipeList.innerHTML += `<h3>${step}</h3>`;
      });
    };
  };

  for (let i = 0; i < allRecipes.length; i++) {
    if (allRecipes[i].id == event.target.closest(".view-recipe-button").id) {
      let printIngredients = allRecipes[i].listIngredients();
      printIngredients.forEach(ingredient => {
        recipeList.innerHTML += `<h4>${ingredient}</h4>`;
      });
    };
  };
};

function createRecipeIdeas(recipe) {
  recipeList.innerHTML += `
    <div class="recipe-card" id="${recipe.id}">
      <div class="recipe-image-box">
        <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
      </div>
    <h3>${recipe.name}</h3>
      <button class="view-recipe-button" id="recipe-button">View Recipe</button>
      <button class="save-button"id="${recipe.id}">Save Recipe</button>
      <button class="delete-button hidden">Delete Recipe</button>
    </div>`;
};

function saveRecipe(event) {
  event.target.closest(".save-button").id
  savedRecipesView.innerHTML += 'hi i am a saved recipe!'
  showSavedView()
  // SAVE for now... we will need this to make cards =>  user.addRecipeToList()
};

function showRecipeIdeas() {
  recipeList.innerHTML = ' '
  // show(recipeIdeasView);
  show(recipeList);
  hide(savedRecipesView);
  allRecipes.forEach(recipe => {
    createRecipeIdeas(recipe)
  });
};

function showHomepage() {
  randomCounter = 0
  recipeList.innerHTML = ' '
  show(recipeList)
  hide(recipeIdeasView)
  allRecipes.forEach(recipe => {
    createRecipe(recipe)
  })
  hide(savedRecipesView)
};

function showSavedView() {
  hide(recipeList)
  hide(recipeIdeasView)
  show(savedRecipesView)
};

function searchAllRecipes() {
  recipeList.innerHTML = ` `
  let recipeMatch = user.filterAllByName(searchNameBar.value)
  let test = recipeMatch.forEach(recipe => {
    recipeList.innerHTML += `
      <div class="recipe-card" id="${recipe.id}">
        <div class="recipe-image-box">
          <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
        </div>
      <h3>${recipe.name}</h3>
        <button class="view-recipe-button"id="${recipe.id}">View Recipe</button>
        <button class="save-button">Save Recipe</button>
        <button class="delete-button hidden">Delete Recipe</button>
      </div>`
  })
  return test
};

function filterAllRecipes() {
  let recipeMatch = user.filterAllByTag(searchTagBar.value)
  recipeList.innerHTML = ` `
  let test1 = recipeMatch.forEach(recipe => {
    recipeList.innerHTML += `
      <div class="recipe-card" id="${recipe.id}">
        <div class="recipe-image-box">
          <img src=${recipe.image} alt="recipe image" class="recipe-display-image">
        </div>
      <h3>${recipe.name}</h3>
        <button class="view-recipe-button" id="${recipe.id}">View Recipe</button>
        <button class="save-button">Save Recipe</button>
        <button class="delete-button hidden">Delete Recipe</button>
      </div>`
  });
  return test1
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
