# What's Cookin'

## Abstract
Ever wondered what to cook? Use this repo to help you discover some brand new recipes and be able to save them! This was a group project assigned by the [Turing School of Software and Design](https://turing.edu/). This was a recipe tracking application which utilized a variety of technologies, which are listed below. The project goals for Part I were to: implement ES6 classes that communicate to each other as needed, use object and array prototype methods to perform data manipulation, create a user interface that is easy to use and clearly displays information, implement a robust testing suite using TDD, and make network requests to retrieve data. The project goals for Part II were to: work with local servers and make network requests to API endpoints to retrieve and manipulate data, refactor code to DRY up repetitive logic, follow best practices for accessibility, and take part in a technical interview.

![What's Cookin' mov](https://user-images.githubusercontent.com/28677929/182286365-33828a29-f8a4-4bd4-8f24-950866cb2a5a.mov)

## Set Up
- Clone down the Repo `git clone` https://github.com/turingschool-examples/whats-cookin-starter-kit
- In your terminal, `git clone`
- Cd into your directory
- Run `npm install`
- Run `npm start` and open `localhost:8080` in your preferred browser

- Clone down the Repo `git clone` https://github.com/turingschool/What-s-cookin--starter-kit-API
  This API holds the data our project will fetch in order to populate the browser with info and handles the backend components.
- Open a new terminal shell
- In your terminal, `git clone`
- Cd into your directory
- Run `npm install`
- Run `npm start`

## Project Specs
The project specs and rubric for What's Cookin' Part I can be found [here](https://frontend.turing.edu/projects/whats-cookin-part-one.html)
The project specs and rubric for What's Cookin' Part II can be found [here](https://frontend.turing.edu/projects/whats-cookin-part-two.html)

## Technologies Used
- Javascript
- HTML
- CSS
- Mocha
- Chai
- GET & POST Fetch Requests
- Webpack
- GitHub & Git

## Challenges
- TDD and Class Architecture
- Event Delegation
- Nested Data
- POST refresh

## Wins
- Accessibility
- Collaboration
- API calls

## Testing
- Testing is currently throwing an error due to an imported function on line 1 of the user class
- To run tests, please comment out line 1 of the user.js file
- Tests should now appear when running npm test, you should see all currently functioning tests
- tests begin to break on line 38 of the user.js class due to the imported function now being commented out
- this also impacts a couple of the pantry.js tests and the pantry is instantiated when a new user is created on page load
- To return page functionality, please comment back in line 1 of the user.js file

## Future Extensions
- User can remove decimal amounts from their pantry.
- Only one search bar to handle multiple search queries.
- More concise error handling for adding and removing ingredients from pantry.
- Create login page.

## Contributors
- Ali Nix [LinkedIn](https://www.linkedin.com/in/ali-nix-38b9b9126/) [GitHub](https://github.com/alinix1)
- Colby Pearce [LinkedIn](https://www.linkedin.com/in/colby-pearce1/) [GitHub](https://github.com/Crpearce/whats-cookin)
- Eddie Rodriguez [LinkedIn](https://www.linkedin.com/in/edward-rodriguez-1b497423b/) [GitHub](https://github.com/edjrodriguez)
- Marianne Barton [LinkedIn](https://www.linkedin.com/in/marianne-barton-1307/) [GitHub](https://github.com/mhbarton)
