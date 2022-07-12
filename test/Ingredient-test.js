import {
    expect
  } from 'chai';
  import Ingredient from '../src/classes/Ingredient';
  
  
  describe('Ingredient', () => {
   let ingredient;
  
    beforeEach(() => {
        ingredient = new Ingredient({
            "id": 20081,
            "name": "wheat flour",
            "estimatedCostInCents": 142
          });
    });

    it.skip('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it.skip('should be a new instance of Ingredient', () => {
        expect(ingredient).to.be.an.instanceof(Ingredient);

    });

    it.skip('should have an id', () => {
        expect(ingredient.id).to.equal(ingredient.id);

    });

    it.skip('should have a name', () => {
        expect(ingredient.name).to.equal(ingredient.name);

    });

    it.skip('should have an estimated cost in cents', () => {
        expect(ingredient.estimatedCostInCents).to.equal(ingredient.estimatedCostInCents);

    });

  });