
// Call, Bind and Apply

// Call -> call() method calls the function with a given this value and arguments provided individually.

const obj = {
  name: "Sourav",
  age: 11
}

function greet(times, duration){
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
