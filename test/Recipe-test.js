import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';


describe('Recipe', () => {

  let recipe1;
  let id = 595736;
  let image = "https://spoonacular.com/recipeImages/595736-556x370.jpg";
  let ingredients = [
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
    }];
    let instructions = [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      }];
      let name = "Loaded Chocolate Chip Pudding Cookie Cups";
      let tags = ["antipasti", "starter"]

  beforeEach(() => {
    recipe1 = new Recipe(id, image, ingredients, instructions, name, tags);
    // ingredient1 = new Ingredient()

  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be a new instance of Recipe', () => {
    expect(recipe1).to.be.an.instanceof(Recipe);
  });

  it('should have an id', () => {
    expect(recipe1.id).to.equal(595736);
  });

  it('should have an image', () => {
    expect(recipe1.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should have an ingredients', () => {
    expect(recipe1.ingredients).to.deep.equal([
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
      }]);
  });

  it('should have an instructions', () => {
    expect(recipe1.instructions).to.deep.equal([
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      }]);
  });

  it('should have a recipe name', () => {
    expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it('should have recipe tags', () => {
    expect(recipe1.tags).to.deep.equal(["antipasti", "starter"]);
  });

  it.skip('should give a list of ingredients', () => {
    expect(recipe1.listIngredients()).to.deep.equal(recipe.ingredients);
  });

  it.skip('should give an estimated cost of ingredients', () => {
    expect(recipe1.estimateIngredientCost()).to.equal('$177.76');
  });

  it.skip('should provide recipe\'s instructions', () => {
    expect(recipe1.provideRecipeInstructions()).to.equal(recipe.instructions);
  });

});
