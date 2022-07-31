import { expect } from 'chai';
import User from '../src/classes/User';
import usersData from '../src/data/users';
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
    user = new User(usersData[0], recipeRepository);

  });
      it('should be a function', () => {
        expect(User).to.be.a('function')
      });

      it('Should be a new instance of User', () => {
        expect(user).to.be.an.instanceOf(User)
      });

      it('should start with a name', () => {
        expect(user.name).to.deep.equal("Saige O'Kon")
      });

      it('should start with an id', () => {
        expect(user.id).to.deep.equal(1)
      });

      it('should start with items in their pantry', () => {
        expect(user.pantry).to.be.an('object')
      });

      it('should start with no saved recipes', () => {
        expect(user.savedRecipes).to.deep.equal([])
      });

      it('should add recipes to my saved recipes', () => {
        user.addRecipeToCookbook('pork')
        user.addRecipeToCookbook('Wing')

        expect(user.savedRecipes).to.deep.equal([recipe2, recipe3])
      });

      it('should remove recipes from my saved recipes', () => {
        user.addRecipeToCookbook('pork')
        user.addRecipeToCookbook('Wing')
        user.addRecipeToCookbook('Wing')
        user.addRecipeToCookbook('Wing')

        expect(user.savedRecipes).to.deep.equal([recipe2, recipe3])

        user.removeRecipeFromList(recipe3)

        expect(user.savedRecipes).to.deep.equal([recipe2])

      });

      it('should filter a recipe by tag if included in the recipe', () =>  {
        user.addRecipeToCookbook('wing')
        user.addRecipeToCookbook('pork')

       expect(user.filterAllByTag('sauce')).to.deep.equal([recipe3])
       expect(user.filterAllByTag('lunch')).to.deep.equal([recipe2])
      });

      it('should not filter a recipe by tag if not included in the recipe', () => {

      expect(user.filterAllByTag('42')).to.deep.equal([])
      });

      it('should filter a recipe by name if included in the recipe', () =>  {
        user.addRecipeToCookbook('cookie')

       expect(user.filterAllByName('cookie')).to.deep.equal([recipe1])
      });

      it('should not filter a recipe by name if not included in the recipe', () => {

        expect(user.filterAllByName('42')).to.deep.equal([])
      });
});
