// WAP to create array of numbers and take input from user
const prompt = require('prompt-sync')();

let arr = [];
let size = prompt("Enter the size of array : ")
size = Number.parseInt(size);
for(let i = 0; i<size; i++){
    arr[i] = Number.parseInt(prompt("Enter Element : "))
}
console.log(arr)
