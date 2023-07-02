//Map method in js

// const numbers = [11, 22, 33, 44, 55, 66, 77, 88]
// //ex-1
// const plus = numbers.map( (num) => num + 10)
// console.log(plus);

// //ex-2
// const squareRoot = numbers.map( (num) => Math.sqrt(num))
// console.log(squareRoot);


//chaining method

const int = [11, 22, 33, 44, 55, 66, 77, 88]
//chaining
let chaining = int.map( (num) => num * 3)
                    .map( (num) => num+5)

console.log(chaining);
//chaining in diff methods
chaining = int.map( (num) => num * 3)
                .map( (num) => num+5) 
                .filter( (item) => (item >= 100))

console.log(chaining);