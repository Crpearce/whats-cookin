import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import sampleIngredientData from '../src/data/sample-ingredients';




  describe('Ingredient', () => {
   let ingredient;
   let ingredient1;
   let ingredient2;
   let ingredientList;

    beforeEach(() => {
      // ingredientList = sampleIngredientData.map(ingredient =>  {
      //
      //   return ingredient = new Ingredient(sampleIngredientData[i])
      //   // in each ingredients once return is run, we need a way to check the next ingredient to finish this map
      //
      // });
      // console.log(ingredientList)

        ingredient = new Ingredient(sampleIngredientData[0]);
        ingredient1 = new Ingredient(sampleIngredientData[1]);
        ingredient2 = new Ingredient(sampleIngredientData[2]);
        ingredientList = [ingredient, ingredient1, ingredient2]
// with an iterator method instead
// const would be an ingredient list
// go into sample ingredient data and for each ingredient create a new Instance of ingredient and return an array of all those new instances
// let ingredientList = sampleIngredientData.map(ingredient =>      ingredient = new Ingredient(sampleIngredientData);





// later thoughts how do they talk to each other

    });

    it('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it('should be a new instance of Ingredient', () => {
        expect(ingredient).to.be.an.instanceof(Ingredient);

    });

    it('should have an id', () => {
        expect(ingredient.id).to.equal(20081);

    });

    it('should have a name', () => {
        expect(ingredient.name).to.equal("wheat flour");

    });

    it('should have an estimated cost in cents', () => {
        expect(ingredient.estimatedCostInCents).to.equal(142);

    });

  });
