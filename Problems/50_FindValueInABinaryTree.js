// Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.

// const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// valueInTree(arr1, 5) ➞ true

// valueInTree(arr1, 9) ➞ false

// valueInTree(arr2, 51) ➞ false

function valueInTree(arr, value){
    return arr.flat(Infinity).includes(value)
}

const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

console.log(valueInTree(arr1, 5));
console.log(valueInTree(arr1, 9));
console.log(valueInTree(arr1, 51));
console.log(valueInTree(arr1, 8));