let fetchData = (dataFileName) =>
  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${dataFileName}`)
    .then(response => response.json())
    .then(`response => response.${dataFileName}Data`)
    .catch(err => alert('there was an error in providing you the information'))
    
export {fetchData}





