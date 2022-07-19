// Your fetch requests will live here!

let fetchIngredientData = () =>
  fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
    .then(response => response.json())
    .then(response => response.ingredientsData)
    .catch(err => alert('there was an error in providing you the information'))
let fetchRecipeData = () =>
  fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(response => response.json())
    .then(response => response.recipeData)
    //   console.log(response);
     
    
    .catch(err => alert('there was an error in providing you the information'))
let fetchUserData = () =>
  fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
      .then(response => response.json())
      .then(response => response.usersData)
      .catch(err => alert('there was an error in providing you the information'))
console.log('I will be a fetch request!')
export {fetchIngredientData, fetchRecipeData, fetchUserData}


// console.log('I will be a fetch request!')