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

  beforeEach(() => {
    user = new User(
      {
        'name': "Saige O'Kon",
        'id': 1,
        'pantry': [
          {
            "ingredient": 11477,
            "amount": 4
          },
          {
            "ingredient": 11297,
            "amount": 4
          },
          {
            "ingredient": 1082047,
            "amount": 10
          },
          {
            "ingredient": 20081,
            "amount": 2
          },
          {
            "ingredient": 18372,
            "amount": 2
          }
        ]
      });

    recipe1 = new Recipe(
      {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients:[
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
            }
          ],
          instructions: [
            {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
            },
            {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
            }
          ],
          name: "Loaded Chocolate Chip Pudding Cookie Cups",
          tags: ["antipasti", "starter"]
        });

        recipe2 = new Recipe(
          {
            id: 678353,
            image: "https://spoonacular.com/recipeImages/678353-556x370.jpg",
            ingredients: [
              {
                "id": 1009016,
                "quantity": {
                  "amount": 1.5,
                  "unit": "cups"
                }
              },
              {
                "id": 9003,
                "quantity": {
                  "amount": 2,
                  "unit": ""
                }
              },
            ],
            instructions:
            [
              {
                "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
                "number": 1
              }
            ],
            name: "Maple Dijon Apple Cider Grilled Pork Chops",
            tags: ["lunch", "main course"]
          });
      pantry = new Pantry(user)
        
  });

  it('Should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('Should be an instance of Pantry', () => {
  
    expect(pantry).to.be.instanceOf(Pantry);
  });

  it('Should start with a list of ingredients', () => {
    expect(pantry.pantryContents.pantry).to.be.an('object');
  });

  it('should tell the user if they can cook the recipe', () => {
    expect(pantry.checkForIngredients(595736, recipeData)).to.be.false
  });

  it('should tell the user how many ingredients are missing to cook the recipe', () => {
    expect(pantry.checkMissingIngredientsTotal(595736, recipeData)).to.equal(9)
  });


})
