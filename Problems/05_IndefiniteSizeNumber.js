// Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
const prompt = require('prompt-sync')();
function indefiniteSize(num1, num2){
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);

    let sum = num1+num2;

    // sum = sum.toString();
    return sum.toString();
}

let num1 = prompt("Enter first Number : ")
let num2 = prompt("Enter Second Number : ")
let result = indefiniteSize(num1, num2)
console.log(result);