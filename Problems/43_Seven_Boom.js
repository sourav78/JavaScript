// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

let sevenBoom = (arr) => {
    let state = ""
    for(let i of arr){
        if(checkSeven(i)){
            state = "Boom!"
            break
        }else{
            state = "there is no 7 in the array"
        }
    }
    return state
}

const checkSeven = (num) => {
    let strArr = num.toString().split("")
    let digitArr = strArr.map(Number)
    return digitArr.includes(7)
}

const boomSeven = arr => {
    if(arr.toString().includes(7)){
        return "Boom!"
    }else{
        return "7 is not present"
    }
}

console.log(sevenBoom([1, 2, 3, 4, 58, 6, 97, 8]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
console.log(sevenBoom([8, 6, 33, 100]));

console.log(boomSeven([1, 2, 3, 4, 58, 6, 97, 8]));
console.log(boomSeven([2, 55, 60, 97, 86]));
console.log(boomSeven([8, 6, 33, 100]));


// let sample = 26489
// let digit = sample.toString().split("")
// let numDiigit = digit.map(Number)
// console.log(numDiigit.includes(4));
// let last = sample % 10
// console.log(last);