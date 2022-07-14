import Ingredient from './Ingredient';
import ingredientsData from '../data/ingredients';

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  };
  listIngredients(){
    let getIds = this.ingredients.map(ingredient => ingredient.id)
    let findIds = getIds.forEach(id =>  {
      if(id === ingredientsData.id){
        return ingredientsData.name
      }
    })
    // console.log(ingredientsData)
    // 1 - look at this.ingredients for id's
    //    - collect all ids from a recipe in an array
    //    - once we have the array we will go to step 2
    // 2 - find()? all id's that match the id's from our
    //        ingredient data array-- push into array??
    // 3 -find the matches and return the whole ingredient object
    // 4 - once we have the ingredient objects(new instantiation of Ingredient)
    //      we should be able to iterate through to return names
    //
    // ingredient.findIngredientName()
    // console.log(this.ingredients.name);
    // return this.ingredients.name
  };
  estimateIngredientCost() {}
  ;
  provideRecipeInstructions(){
    return this.instructions
  };
};

export default Recipe;
