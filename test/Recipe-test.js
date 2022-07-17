import { expect } from 'chai';

import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/sample-recipes';
import ingredientData from '../src/data/sample-ingredients';

describe('Recipe', () => {
  let recipe;
  let recipe2;

  beforeEach(() => {
    recipe = new Recipe(recipeData[0], ingredientData);
    recipe2 = new Recipe(recipeData[1], ingredientData);
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

  it('should have ingredients', () => {
    let ingredient = [{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    },
    {
      "id": 1123,
      "quantity": {
        "amount": 1,
        "unit": "large"
      }
    },
    {
      "id": 19335,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }
    },
    {
      "id": 19206,
      "quantity": {
        "amount": 3,
        "unit": "Tbsp"
      }
    },
    {
      "id": 19334,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }
    },
    {
      "id": 2047,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    },
    {
      "id": 1012047,
      "quantity": {
        "amount": 24,
        "unit": "servings"
      }
    },
    {
      "id": 10019903,
      "quantity": {
        "amount": 2,
        "unit": "c"
      }
    },
    {
      "id": 1145,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }
    },
    {
      "id": 2050,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }]
    expect(recipe.ingredients).to.deep.equal(ingredient);
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
      "hor d'oeuvre"
    ]);
  });

  it('should determine the names of ingredients needed', () => {
    expect(recipe.listIngredients()).to.deep.equal(['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose', 'instant vanilla pudding', 'brown sugar', 'salt', 'fine sea salt', 'semi sweet chips', 'unsalted butter', 'vanilla']);
  });

  it('should give an estimated cost of ingredients', () => {
    expect(recipe.estimateIngredientCost()).to.deep.equal(177.76);
  });

  it('should provide a recipe\'s instructions', () => {
    expect(recipe.provideRecipeInstructions()).to.equal(recipe.instructions);
  });

});
