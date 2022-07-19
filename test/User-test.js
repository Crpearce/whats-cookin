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
        expect(user.pantry).to.deep.equal([{
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20081,
          "amount": 5
        },
        {
          "ingredient": 11215,
          "amount": 5
        },
        {
          "ingredient": 2047,
          "amount": 6
        },
        {
          "ingredient": 1123,
          "amount": 8
        },
        {
          "ingredient": 11282,
          "amount": 4
        },
        {
          "ingredient": 6172,
          "amount": 2
        },
        {
          "ingredient": 2044,
          "amount": 2
        },
        {
          "ingredient": 2050,
          "amount": 4
        },
        {
          "ingredient": 1032009,
          "amount": 3
        },
        {
          "ingredient": 5114,
          "amount": 3
        },
        {
          "ingredient": 1017,
          "amount": 2
        },
        {
          "ingredient": 18371,
          "amount": 7
        },
        {
          "ingredient": 1001,
          "amount": 6
        },
        {
          "ingredient": 99223,
          "amount": 2
        },
        {
          "ingredient": 1230,
          "amount": 2
        },
        {
          "ingredient": 9152,
          "amount": 4
        },
        {
          "ingredient": 10611282,
          "amount": 2
        },
        {
          "ingredient": 93607,
          "amount": 2
        },
        {
          "ingredient": 14106,
          "amount": 4
        },
        {
          "ingredient": 1077,
          "amount": 4
        },
        {
          "ingredient": 6150,
          "amount": 2
        },
        {
          "ingredient": 1124,
          "amount": 2
        },
        {
          "ingredient": 10011693,
          "amount": 4
        },
        {
          "ingredient": 1102047,
          "amount": 2
        },
        {
          "ingredient": 19206,
          "amount": 2
        },
        {
          "ingredient": 1145,
          "amount": 4
        },
        {
          "ingredient": 1002030,
          "amount": 4
        },
        {
          "ingredient": 12061,
          "amount": 2
        },
        {
          "ingredient": 19335,
          "amount": 4
        },
        {
          "ingredient": 15152,
          "amount": 3
        },
        {
          "ingredient": 9003,
          "amount": 2
        },
        {
          "ingredient": 18372,
          "amount": 3
        },
        {
          "ingredient": 2027,
          "amount": 2
        }
      ])
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
      
       expect(user.filterAllByTag('sauce')).to.deep.equal([recipe3])
       expect(user.filterAllByTag('lunch')).to.deep.equal([recipe2])

      });

      it('should filter a recipe by name', () =>  {
       
      user.addRecipeToList('cookie')
       expect(user.filterAllByName('cookie')).to.deep.equal([recipe1])
      });
});