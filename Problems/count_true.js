//Create a function which returns the number of true values there are in an array.

// const countTrue = (arr) => {
//     let count = 0
//     for(let arrayIndex of arr){
//         if (arrayIndex) {
//             count += 1
//         }
//     }
//     return count
// }

// let arrays = [true, false, false, false, true, true]
// let checkTrue = countTrue(arrays)
// console.log(checkTrue);

function countTrue(arr){
    return arr.filter(x => x==true).length
}

let arrays = [true, false, false, false, true, true]
let checkTrue = countTrue(arrays)
console.log(checkTrue);