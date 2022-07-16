import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search-icon.svg'
import './images/logo.png'
// import '.images/calum-lewis-vA1L1jRTM70-unsplash.jpg'

//query selectors:
let ideasOption = document.getElementById('userOptionIdeas');
let savedRecipesOption = document.getElementById('userOptionSavedRecipes');
let searchNameButton = document.getElementById('query1');
let searchTagButton = document.getElementById('query2');
let recipeIdeasView = document.getElementById('recipeIdeasView');
let savedRecipesView = document.getElementById('savedRecipesView');



//eventListeners:
window.addEventListener('load', randomizedRecipesIdeas);
ideasOption.addEventListener('click', randomizedRecipeIdeas);
savedRecipesOption.addEventListener('click', seeSavedRecipes);
savedRecipesView.addEventListener('dblclick', deleteSavedRecipes);

//we need a button on the recipe page to save
//eventHandlers:


console.log('Hello world');
