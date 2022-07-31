import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import pantryItems from '../src/data/sample-pantry';
import User from '../src/classes/User';
import usersData from '../src/data/users';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/sample-recipes';
import RecipeRepository from '../src/classes/RecipeRepository';
import ingredientData from '../src/data/sample-ingredients';


describe('Pantry', () => {
  let pantry;
  let recipe1;
  let recipe2;
  let user;
  let recipeRepository;

  beforeEach(() => {
    recipe1 = new Recipe(recipeData[0], ingredientData);
    recipe2 = new Recipe(recipeData[1], ingredientData);
    recipeRepository = new RecipeRepository([recipe1, recipe2]);
    user = new User(usersData[0], recipeRepository);
    pantry = new Pantry(user.pantry.pantryContents, recipeRepository)
        
      });
      
      it('Should be a function', () => {
        expect(Pantry).to.be.a('function');
      });
      
  it('Should be an instance of Pantry', () => {
  
    expect(pantry).to.be.instanceOf(Pantry);
  });

  it('Should start with a list of ingredients', () => {
    expect(user.pantry.pantryContents).to.be.an('array');
  });

  it('should tell the user if they can cook the recipe', () => {
    expect(pantry.checkForIngredients(595736, recipeData)).to.be.equal('You have ${noDuplicateIds.length} missing ingredients. The ingredients needed are ${missingIngredientNames}.`')
  });

  it('should tell the user how many ingredients are missing to cook the recipe', () => {
    expect(pantry.checkMissingIngredientsTotal(595736, recipeData)).to.equal(9)
  });

  it('should be able to determine missing ingredient names', () => {
    expect(pantry.missingIdName(595736, ingredientData)).to.equal(9)
  });


})
