
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastname.length - 2];



// ES6

// var and let


let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// using let inside and outside a scope 

function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
       let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }

// mutation

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2
  s[1] = 5
  s[2] = 7
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

// Object.freeze

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
 
Object.freeze(MATH_CONSTANTS)
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// using arrow functions 



var magic = function() {
  "use strict";
  return new Date();
};

// changin above code using Arrow functions 

const magic = () => new Date()


// passing more than one

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log([1,2], [3,4,5])

// writing higher order Arrow functions 


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
   const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
    };

    // test your code
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);


// default value kicks in when the value is not passed 
const increment = (function(value = 1) {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN


// Redux 


// creating a store

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer)

//getting a state from a store 

const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
var currentState = store.getState()

// action example. They are written just like an object but they have a type 
const action = {
  type : 'LOGIN'
}


// action creators are functions that return an action 

function actionCreator() {
  return {
    type : LOGIN,
  }
}



// dispatcher basically send the returned action from the action creators to the store
// actionCreator functions are passed 

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())
store.dispatch({type: 'LOGIN'})



// using switch statements to handle multiple action types


const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'


const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  }
};


