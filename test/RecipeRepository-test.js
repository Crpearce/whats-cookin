import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/sample-recipes';
import ingredientData from '../src/data/sample-ingredients';

describe('Recipe Repository', () => {
  let recipeRepository;
  let recipe1;
  let recipe2;
  let recipe3;


beforeEach(() => {
    recipe1 = new Recipe(recipeData[0], ingredientData);
    recipe2 = new Recipe(recipeData[1], ingredientData);
    recipe3 = new Recipe(recipeData[2], ingredientData);

    recipeRepository = new RecipeRepository([recipe1, recipe2, recipe3]);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of Recipe Repository', () => {
    expect(recipeRepository).to.be.instanceof(RecipeRepository);
  });

  it('Should hold an instance of recipe', () => {
    expect(recipeRepository.recipes[0].id).to.equal(595736);
    expect(recipeRepository.recipes[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  });

  it('Should filter a recipe based on a tag', () => {

    expect(recipeRepository.pickRecipeTag('antipasti')).to.deep.equal([recipe1])
  });

  it('Should filter a recipe based on a name', () => {
    expect(recipeRepository.pickRecipeName('cookie')).to.deep.equal([recipe1])
  });

});
