// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

function numInStr(arr){
    let jjj = arr.filter(ele => /\d/.test(ele))
    console.log(jjj);
}

numInStr(["1a", "a", "2b", "b"])
numInStr(["abc", "ab10c", "a10bc", "bcd"])
numInStr(["this is a test", "test1"])