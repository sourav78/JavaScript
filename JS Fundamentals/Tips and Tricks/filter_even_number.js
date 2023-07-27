//check the array is eve or not

const numbers = [1, 3, 5, 7, 9]
const evenArr = [2, 4, 5]

function hasEven(arr){
    for(let i in arr){
        if(arr[i] % 2 === 0){
            return true
        }
    }
    return false
}

console.log(hasEven(numbers));

//2nd approach

function isEven(arr){
    return arr.some( (ele) => ele % 2 === 0)
}
console.log(isEven(numbers)); // false
console.log(isEven(evenArr));