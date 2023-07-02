// Arraow function in javascript (=>)
const prompt = require('prompt-sync')();


// Expicit return
const avg = (a, b, c) => {
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    c = Number.parseInt(c);
    let r = (a+b+c)/3;
    return r
  }
  
//   let a  = prompt("Enter 1st number : ")
//   let b  = prompt("Enter 2nd number : ")
//   let c  = prompt("Enter 3rd number : ")
//   console.log(avg(a, b, c))


//implicit return --> means this function dont need any return keyword. It automatically returs the result
const addTwoNumber = (num1, num2) => (num1+num2)

console.log(addTwoNumber(11, 23));


//return an object in arrow function

// const returnObject = () => {username: "sourav78"}  //--> it returns an undefined object because the object not in paranthesis
const returnObject = () => (
    {username: "sourav78",
    password:"******"}) 

console.log(returnObject());