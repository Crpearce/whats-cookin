import Recipe from "./Recipe"

class RecipeRepository {
  constructor(recipes) {
    
    // console.log(recipes[2])
     this.recipes = recipes
     this.allRecipes = this.recipes.map(recipe => {
     new Recipe();
   })
   console.log(this.allRecipes)
    
    //  console.log(this.ingredients)
  };


  pickRecipeTag() {
    // console.log(tag)


// go into this.recipes (which is an array) and for each recipe filter through the this. recipes[i].tags and if the .tags strictly equals the tag argument return the whole recipe object in an array

let findByTag = this.recipes.filter((recipe) => {
  return recipe.tags === 'sauce';
})
// console.log(findByTag)
return findByTag

    // filter method
    // return an array
};
  pickRecipeName(name) {
    // filter method
    // return an array
  };

};

export default RecipeRepository;