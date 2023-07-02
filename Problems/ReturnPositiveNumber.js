//Create a function that receives an array of numbers and returns an array containing only the positive numbers
const prompt = require('prompt-sync')();

function filterArray(arr){
    let positiveArray = [];
    for(let i = 0; i<arr.length; i++){
        if (arr[i]>0) {
            positiveArray.push(arr[i]);
        }
    }
    return positiveArray;
}

let array = [12, 34, -89, -2, 4, -1, 2, 5]
let fa = filterArray(array);
console.log(fa);