//Write a function to flatten an array. For example, [1, 2, [3, 4, [5, 6]]] should become [1, 2, 3, 4, 5, 6].

const flattenArr = arr => {
    return arr.flat(Infinity)
}

console.log(flattenArr([1, 2, [3, 4, [5, 6]]]));
console.log(flattenArr([11, 22, [33,[[[44, 55, [66, [[77]]]]]]]]));