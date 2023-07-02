//Calculate the sum of numbers in an array of numbers
const prompt = require('prompt-sync')();
const arraySum = (arr) => {
    // arr = Number.parseInt(arr);
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

let size = prompt("Enter array Size :")
size = Number.parseInt(size);
let array = [];
let sum  = 0;
for(let i=0; i<size; i++){
    array[i] = Number.parseInt(prompt(`Enter ${i+1} element : `));
}
arraySum(array);


// for(let i = 0; i<array.length; i++){
//     sum +=array[i]
// }
// console.log(sum)