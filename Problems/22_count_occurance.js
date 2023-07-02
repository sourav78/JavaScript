// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

const occurrences = input.flat().reduce( (acc, curr) => {
    if(acc[curr]){
        acc[curr] +=1
    }else{
        acc[curr] = 1
    }
    return acc
}, {})

console.log(occurrences);