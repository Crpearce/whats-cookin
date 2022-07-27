import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import pantryItems from '../src/data/sample-pantry';
import User from '../src/classes/User';
import usersData from '../src/data/users';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/sample-recipes';
import RecipeRepository from '../src/classes/RecipeRepository';


describe('Pantry', () => {
  let pantry;
  let recipe1;
  let user;

  beforeEach(() => {
    recipe1 = new Recipe({
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

      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
      ]
    },   [{
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      }
    ])
    user = new User("Saige O'Kon", 1, [{
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
      }
    ])
      pantry = new Pantry(usersData);
  });

  it('Should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('Should be an instance of Pantry', () => {
    expect(pantry).to.be.instanceOf(Pantry);
  });

  it('Should start with a list of ingredients', () => {
    expect(pantry.pantryContents[0]).to.deep.equal(usersData[0]);
  });

  it('should tell the user if their pantry has enough ingredients for a recipe', () => {
    expect(pantry.checkForIngredients(595736, recipeData)).to.be.false
  })

})
