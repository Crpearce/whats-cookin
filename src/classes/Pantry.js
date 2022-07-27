class Pantry{

  constructor(usersData){
    this.pantryContents = usersData;
    // this.amount = usersData.amount;
  }
  checkForIngredients(id, recipeData){
    let hasIngredients = true;
    let currentRecipe = recipeData.find(recipe => recipe.id === id).ingredients;
    // console.log(currentRecipe)
    currentRecipe.forEach(ingredient => {
      if(!this.pantryContents[ingredient]){
        hasIngredients = false;
      } else {
        this.pantryContents.forEach(ingredient => {
          if(ingredient.amount >= ingredient.quantity.amount){
            hasIngredients = true;
          }
        })
      }
    })
    return hasIngredients
  }


    // check for ingredients in pantry and check ingredients of recipe
    // from here we want to filter over pantry ingredients and pull the ids that match the recipe ids
    // if pantry item id deeply matches recipe ingredient id, push it into the array
    // then check if pantry amount is less than recipe amount return false you can't make this recipe, else return then happy cooking!
    // recipe[0].listIngredients()
    // console.log(user)
  }
  //   this.pantryContents.filter((ingredient) =>{
  //      if(this.pantryContents.ingredient === recipe.ingredients.id) {
  //      ingredientCheck.push(ingredient)
  //    }
  //   })
  //   console.log(this.pantryContents.ingredient)
  //   return ingredientCheck
  // }
//   determineMissingIngredients(){
//
//   }
// }

export default Pantry;



// listIngredients() {
//   let ingredientNames = [];
//   let getIds = this.ingredients.map(ingredient => ingredient.id)
//   getIds.forEach(id => {
//     this.ingredientList.forEach(ingredient => {
//       if (ingredient.id === id) {
//         ingredientNames.push(ingredient.name)
//       }
//     })
//   })
//   return ingredientNames
// };
