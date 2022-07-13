import { expect } from 'chai';

import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/sample-recipes';

describe('Recipe', () => {
  let recipe;
  let recipe2;

  beforeEach(() => {
    recipe = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be a new instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have an id', () => {
    expect(recipe.id).to.equal(595736);
  });

  it('should have an image', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have an ingredients', () => {
      const ingredient = {
        "id": 20081,
        "name": "all purpose flour",
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      }
      expect(recipe.ingredients[0]).to.deep.equal(ingredient);
    });

  it('should have a recipe name', () => {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it('should be able to filter by recipe tags', () => {
    expect(recipe.tags).to.deep.equal([
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"]);
  });

  it.skip('should give a list of ingredients', () => {
    expect(recipe.listIngredients()).to.deep.equal(recipe.ingredients);
  });

  it.skip('should give an estimated cost of ingredients', () => {
    expect(recipe.estimateIngredientCost()).to.equal('$177.76');
  });

  it.skip('should provide recipe\'s instructions', () => {
    expect(recipe.provideRecipeInstructions()).to.equal(recipe.instructions);
  });

});