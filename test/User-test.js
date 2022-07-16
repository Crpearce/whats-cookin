import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/sample-recipes';
import ingredientData from '../src/data/sample-ingredients';



describe('User', () => {
    let recipe1;
    let recipe2;
    let recipe3;
    let recipeRepository;
    let user;


    beforeEach(() => {
    console.log(recipeData[0].id);
    
    recipe1 = new Recipe(recipeData[0], ingredientData);
    recipe2 = new Recipe(recipeData[1], ingredientData);
    recipe3 = new Recipe(recipeData[2], ingredientData);
    recipeRepository = new RecipeRepository([recipe1, recipe2, recipe3]);
    user = new User(recipeRepository);

  });
      it.skip('should be a function', () => {
        expect(user).to.be.a('function')
      });

      it.skip('Should be a new instance of User', () => {
        //CODE GOES HERE
      });

      it.skip('should add recipes to my recipes cooklist', () => {
        //CODE GOES HERE
      });

      it.skip('should filter a recipe by tag', () =>  {
        //CODE GOES HERE
      });

      it.skip('should filter a recipe by name', () =>  {
        //CODE GOES HERE
      });




    });