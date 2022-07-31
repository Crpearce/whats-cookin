// // this function is wired to the herokuapp

let fetchData = (dataFileName) =>
  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${dataFileName}`)
    .then(response => response.json())
    .then(`response => response.${dataFileName}Data`)
    .catch(err => alert('there was an error in providing you the information'))
<<<<<<< HEAD
 
=======

>>>>>>> 8bdb068b4157cf090cf2b0c29fa0559f7b6f8058
// this function is wired to the local server

// let fetchData = (dataFileName) =>
//   fetch(`http://localhost:3001/api/v1/${dataFileName}`)
//     .then(response => response.json())
//     .then(`response => response.${dataFileName}Data`)
//     .catch(err => alert('there was an error in providing you the information'))
<<<<<<< HEAD
      
=======

>>>>>>> 8bdb068b4157cf090cf2b0c29fa0559f7b6f8058
export {fetchData}
