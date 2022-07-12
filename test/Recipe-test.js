import {
  expect
} from 'chai';
import Recipe from '../src/classes/Recipe';


describe('Recipe', () => {

  let demoData;
  let recipe;
  let ingredient;

  beforeEach(() => {
    demoData = [{
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
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
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    }];
    recipe = new Recipe(demoData);
    // ingredient1 = new Ingredient()

  });

  it.skip('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it.skip('should be a new instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it.skip('should have an id', () => {
    expect(recipe.id).to.equal(demoData.id);
  });

  it.skip('should have an image', () => {
    expect(recipe.image).to.equal(demoData.image);
  });

  it.skip('should have an ingredients', () => {
    expect(recipe.ingredients).to.equal(demoData.ingredients);
  });

  it.skip('should have an instructions', () => {
    expect(recipe.instructions).to.equal(demoData.instructions);
  });

  it.skip('should have a recipe name', () => {
    expect(recipe.name).to.equal(demoData.name);
  });

  it.skip('should have recipe tags', () => {
    expect(recipe.tags).to.equal(demoData.tags);
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

