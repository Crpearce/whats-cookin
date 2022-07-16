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
    recipe1 = new Recipe(recipeData[0], ingredientData);
    recipe2 = new Recipe(recipeData[1], ingredientData);
    recipe3 = new Recipe(recipeData[2], ingredientData);
    recipeRepository = new RecipeRepository([recipe1, recipe2, recipe3]);
    user = new User(recipeRepository);

  });
      it('should be a function', () => {
        expect(User).to.be.a('function')
      });

      it('Should be a new instance of User', () => {
        expect(user).to.be.an.instanceOf(User)
      });

      it('should start with no saved recipes', () => {
        expect(user.savedRecipes).to.deep.equal([])
      });

      it('should add recipes to my saved recipes', () => {
        user.addRecipeToList('pork')
        user.addRecipeToList('Wing')

        expect(user.savedRecipes).to.deep.equal([recipe2, recipe3])
      });

      it('should remove recipes from my saved recipes', () => {
        user.addRecipeToList('pork')
        user.addRecipeToList('Wing')
        user.addRecipeToList('Wing')
        user.addRecipeToList('Wing')
     
        expect(user.savedRecipes).to.deep.equal([recipe2, recipe3])

        user.removeRecipeFromList(recipe3)
      
        expect(user.savedRecipes).to.deep.equal([recipe2])
        
      });


      it('should filter a recipe by tag', () =>  {

        user.addRecipeToList('wing')
        user.addRecipeToList('pork')
      
       expect(user.filterByTag('sauce')).to.deep.equal([recipe3])
       expect(user.filterByTag('lunch')).to.deep.equal([recipe2])

      });

      it('should filter a recipe by name', () =>  {
       
      user.addRecipeToList('cookie')

       expect(user.filterByName('cookie')).to.deep.equal([recipe1])
      });

});