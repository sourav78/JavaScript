// Calculate the sum of numbers received in a comma delimited string

function calculateSum(str) {
    let arr = str.split(', ')
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + Number.parseInt(arr[i])
    }

    return sum
}

let str = "12, 11, 13, 21, 43, 56, 33";
let sum = calculateSum(str)
console.log(sum);