
// This keyword

// this in global context

this.a = 10;

console.log(this.a);

console.log(this); // This print all the window objects. In side the you can find "a: 10"


// this in function context

this.names = "Hello"

function getName(){
  console.log(this.names);
}

getName()

/**
 * This will print "hello". Because name is present in its parent object (Which is Window Object)
 * this keyword in a normal function is always point to its parent object
 */


// this in arrow function

const getNameArrow = () => {
  console.log(this.name);
}

getNameArrow()


// this in functions inside an object

const user = {
  name: "Sourav",
  age: 20,

  getDetails() {
    console.log(this.name);
  },
  getAge: () => {
    console.log(this.age);
  }
}

user.getDetails() //op:- Sourav
user.getAge() //op:- undefined

/**
 * In this getDetails which  is a normal function pointing to its immediate parent context (Which is "user").
 * But the getAge() which is a arrow function pointing to global window object. ->
 * and window object does not have any property "age" so it return undefined.
 */



const user2 = {
  username: "Sourav",
  age: 20,

  getDetails() {
    const nestedArrow = () => {
      console.log(this.username);
    }

    nestedArrow()
  }
}

user2.getDetails()

/**
 * Arrow function does not have ots own this context.
 * Instead of that, They inherit this from parent function context or surrounding (Lexical) scope.
 * 
 * In this case, Parent function context is getDetails().
 * And the getDetails() function also have access to property of user2.
 */



// this in a class

class Marks{
  constructor(m){
    this.mark = m;
  }

  getMark(){
    console.log("Marks are", this.mark);
  }

  getMarksArrow = () => {
    console.log("Arrow marks are", this.mark);
  }
}

const usermark = new Marks(123)
usermark.getMark()
usermark.getMarksArrow()

/**
 * Here in both function output is -> "123"
 * 
 * Because Inside a class, 
 * In both normal function and arrow function "this" is bound with the "instance of the class" or "class"
 */


console.log("Interview Qestions");


// Interview Questions


// q.1 -> What is the output

const user3 = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Jen!';
    return this.firstName;
  }
};
console.log(user3.getName()); // What is logged?

/**
 * Here the op:- "Piyush!"
 * 
 * Here this in the getName() point to the parent object ehich is "user3"
 * So it return property ob user3.
 */



// q.2 -> What is the output

function makeUser() {
  return {
    username: "John",
    ref: this
  };
}

let user4 = makeUser();

console.log( user4.ref.username ); // What's the result?

/**
 * Here the output is empty.
 * 
 * Because this in makeUser() pointing to the Global object which is Window object.
 * And in window object we dont have any property called username
 */

// How do u make it work?

function makeUser2() {
  return {
    username: "John",
    ref(){
      return this
    }
  };
}

let user5 = makeUser2();

console.log( user5.ref().username );



// q.3 -> What is the output

const user6 = { 
  username: 'Piyush Agarwal!', 
  logMessage() { 
    console.log(this.username); 
  }
}

setTimeout(user6.logMessage, 1000);

/**
 * Here the output is -> undefined 
 * Because When we pass the user.logMessage() to setTimeout() it take that functionas an callback.
 * So the entire function copied inside to setTimeout().
 */

// How to you make it works

const user7 = { 
  username: 'Piyush Agarwal!', 
  logMessage() { 
    console.log(this.username); 
  }
}

setTimeout(() => user7.logMessage(), 1000);



// q.4 -> What is the output

const user8 = { 
  username: 'Sourav', 
  greet() { 
    return `Hello, ${this.username}!; `
  }, 
  farewell: () => { 
    return `Goodbye, ${this.username}!` 
  } 
}; 

console.log(user8.greet()); // What is logged? 
console.log(user8.farewell()); // What is logged?

/**
 * op of greet() => Hello, Sourav!;
 * op of farewell() => Hello, undefined!;
 * 
 * In greet function this is pointing to the context of the parent object.
 * In farewell() this is inherit from its lexical scope which is global context.
 * And global context dont have any value username. So it print undefined.
 */



// q.5 -> Create an object calculator


const calculator = {
  
}

//calculator.read() //This is read the value from user

//calculator.sum() //This return sum of 2 number
//calculator.mul() //This return multiplication of 2 number

// Here is the solution

const calculator2 = {
  read() {
    this.a = +prompt("Enter num 1: ", 0)
    this.b = +prompt("Enter num 2: ", 0)
  },

  sum() {
    console.log("Sum is : ", (this.a + this.b));
  },

  mul() {
    console.log("Multiplication is : ", (this.a * this.b));
  }
}

// calculator2.read() 

// calculator2.sum()
// calculator2.mul()



// q.6 -> What is the output

var length = 4; 

function callback() { 
  console.log(this.length); // What is logged? 
} 

const object = { 
  length: 5, 
  method(fn) { 
    fn() 
  } 
}; 

object.method(callback);

/**
 * Here the out is :- 4
 * 
 * because when you call the fn() inside method and call the method funtion.
 * It will call the calback() globally.
 */

// modified question

const object2 = { 
  length: 5, 
  method() { 
    arguments[0]();
  } 
};

object2.method(callback, 3, 4)

/**
 * Here the output is 3.
 * 
 * Because we call the callback function from argument object. Which is an array object.
 * And argumnent object already have a property which is length and the value of length is size of the array.
 * 
 * And here the size of argument object is 3. It it print 3 -> (callback, 2, 3)
 */



//q.7 -> Implemet calc

// const result = calc.add(10).multiply(5).subtract(30).add(10) 
// console.log(result.total) // What is logged?

// Here is the solution

const calc = {
  total: 0,

  add(num){
    this.total += num
    return this
  },

  multiply(num){
    this.total *= num
    return this
  },

  subtract(num){
    this.total -= num
    return this
  },

}

const result = calc.add(10).multiply(5).subtract(30).add(10) 
console.log(result.total) // What is logged?

/**
 * In this case we return the whole this object or calc object.
 * That why we add multiple chain methods
 */