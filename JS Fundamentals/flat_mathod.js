//flat method in js

// const arrInArr = [1, 2, 3, [4, 5]]
// console.log(arrInArr.flat());

// const arr3D = [1, 2, 3, [4, 5, [6, 7, 8]]]
// console.log(arr3D.flat()); //[ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]
// console.log(arr3D.flat(2));// [ 1, 2, 3, 4, 5, 6, 7, 8]


// const arr2D = [[10, 20], [50, 60], [90, 100]]
// console.log(arr2D.flat()); //[ 10, 20, 50, 60, 90, 100 ]

// const infinityArr = [11, 22, [44, [[[66,[[[77]]]]]]]]
// console.log(infinityArr.flat(Infinity));


//flatMap method in js

const scores = [ [9, 8], [4, 6], [6, 6], [9, 10]]

const totalScrore = scores.flatMap( (score) => score[0] + score[1])
console.log(totalScrore);

const nums = [1, 2, 3, 4]
const str = ["one", "two", "three", "four"]

const numStrs = nums.flatMap( (ele, ind) => [ele, str[ind]])
console.log(numStrs);