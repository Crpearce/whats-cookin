import Recipe from "./Recipe"

class RecipeRepository {
  constructor(recipes) {

    // console.log(recipes[2])
     this.recipes = recipes
     // this.allRecipes = this.recipes.map(recipe => {
     // new Recipe();

    //  console.log(this.ingredients)
  };

  pickRecipeTag(userTag) {
    // console.log(tag)

// go into this.recipes (which is an array) and for each recipe filter through the this. recipes[i].tags and if the .tags strictly equals the tag argument return the whole recipe object in an array
let recipesByTag = [];

const findByTag = this.recipes.filter((recipe) => {
  recipe.tags.forEach(tag => {
    if(tag === userTag) {
      recipesByTag.push(recipe)
    }
  })
});
return recipesByTag

};
  pickRecipeName(userName) {
    let recipesByName = [];

    const findByName = this.recipes.filter(recipe => {
      if(recipe.name.toLowerCase().includes(userName.toLowerCase())){
        recipesByName.push(recipe)
      }
    });
  return recipesByName
};

}

export default RecipeRepository;
