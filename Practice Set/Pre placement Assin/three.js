// const findTargetNum = (arr, tar) => {
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == tar){
//             return i
//         }else if(arr[i] > tar){
//             return `${tar} should be inserted in index number ${i}`
//         }
//     }
// }

// const nums = [1,3,5,6]
// const target = 5

// console.log(findTargetNum(nums, target));


var addStrings = function(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    const result = num1+num2
    return result.toString()
};

num1 = 9333852702227987
num2 = 85731737104263
console.log(addStrings(num1, num2))