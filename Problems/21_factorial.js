// If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const input = 6
const array = new Array(input).fill()
console.log(array);
const factorial = array.map( (item, index) => index+1)
                        .reduce( (acc, curr) => acc*curr, 1)

console.log(factorial);