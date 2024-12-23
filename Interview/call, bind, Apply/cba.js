
// Call, Bind and Apply

// Call -> call() method calls the function with a given this value and arguments provided individually.

const obj = {
  name: "Sourav",
  age: 11
}

function greet(times, duration) {
  console.log(`Hello ${this.name} ${times} Times for ${duration} sec.`);
}

greet(5, 2) // This takes this.name as undefined

// When i make call method in this function
greet.call(obj, 5, 3) // Hello Sourav 5 "Times"



// Apply -> apply() method call the function with given this value but the arguments are provided in array.

greet.apply(obj, [10, 100])

/**
 * Here first argument is this context object 
 * Second argunment is functrions arguments in an array.
 */



// Bind()

/**
 * bind() method create / return a new function with provided this value.
 * This is helpfull to make a resulable function
 */

const bindFunc = greet.bind(obj)
bindFunc(1, 23)
bindFunc(1000, 230000)



// Interview Questions


// q.1 -> What is the output

const person = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));

/**
 * In call() op:- Piyush is 24 Years
 * In bind() op:- It return a function -> sayHi(age) { return `${this.name} is ${age} years`; }
 * 
 * Because bind method is always return a function.
 */



// q.2 -> What is the output

const age = 10;
var person2 = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  }
}

var person3 = { age: 24 };
const personage = person2.getAge.call(person3); // show with apply and bind as well
console.log(personage);

/**
 * OP:- 24
 * 
 * Here initially getAge function point to person2 object.
 * But when we bound it with person3 with call() then it point to person3.
 */



//q.3 -> What is the output

var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

/**
 * 1st OP:- 🥑
 * 2nd OP:- 😎
 * 
 * In the 2nd output -> "this" is not pointing to the function.
 *    Instead it poiting to the context of the function which is global scope.
 *    And Global scope has a property -> status = '😎'
 */



// q.4 -> write printAnimals() in such a way that it prints all animals in object below.

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species + ': ' + this.name);
  }
  this.print();
}

// Solution

animals.forEach((animal, index) => {
  printAnimals.call(animal, index+1)
})



// q.5 -> Append an array to another array. Only use apply method

const arr1 = [2, 5, 3]
const arr2 = [12, 32, 43]

console.log(arr1);

arr1.push.apply(arr1, arr2)

console.log(arr1);

/**
 * Here when we pass arr2 to apply() it take whole array to one by one argument.
 * And we bind push() to apply with the context of arr1. 
 * So it push all the elements to array.
 */




// q.6 -> Using apply to enhance built-in function

// Find min/max number from an array
const numbers = [2, 5, 3, 6, 2, 7]

console.log(Math.max(...numbers));

console.log(Math.max.apply("", numbers));




// q.7 -> What is the output

function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

/**
 * Here the output is:- Window{...} Object
 * 
 * In bind we provide the context as null so its context is fixed to the window Object.
 */




// q.8 -> Bind Chaining

function foo() {
  console.log( this.name ); // ?
}

const ping = foo.bind({name: "Jhon"}).bind({name: "Ally"})

ping()

/**
 * Here the outpuit is : Jhon
 * 
 * Because once a function bind to an perticular object it always bind to that object.
 * The term bind chaing does not exist. The second bind() is not work.
 */



// q.9 -> Fix the "flag 1" function call to make function work properly.

function checkPassword(success, failed){
  const pass = prompt("Enter Password: ", "")

  if(pass === "Sourav") success();
  else failed();
}


const user2 = {
  name: "Sourav R. Sahoo",

  loginSuccess : function(){
    console.log(`${this.name} Login Successfully.`);
  },

  loginFailed: function(){
    console.log(`Login Failed.`);
  }
}

// Flag -> 1
// checkPassword(user2.loginSuccess, user2.loginFailed)

// Solution
// checkPassword(user2.loginSuccess.bind(user2), user2.loginFailed.bind(user2))

/**
 * Here in the solution
 * We bind the user2 object context to success() and failed() of the checkPassword()
 * So when these 2 functions are called then it point to user2 object.
 */