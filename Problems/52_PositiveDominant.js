//52. An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
// isPositiveDominant([5, 0]) ➞ true
// isPositiveDominant([0, -4, -1]) ➞ false

function isPositiveDominant(arr){

    let filteredArr =[ ...new Set(arr)]

    let dominant = 0
    filteredArr.map(ele => ele >= 0 ? dominant += 1 : dominant -= 1)

    return dominant > 0 ? true : false ;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
console.log(isPositiveDominant([5, 0]));
console.log(isPositiveDominant([0, -4, -1]));

// Object.defineProperties(Array.prototype, {
//     count: {
//         value: function(value) {
//             return this.filter(x => x==value).length;
//         }
//     }
// });

// console.log([1, 2, 3, 5, 2, 8, 9, 2].count(2));
// console.log([5, 99, 832, -3, -4].count(2));