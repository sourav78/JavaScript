//Write a JavaScript function to reverse a string.

const reverseString = str => {
    let arr = str.split("")
    return arr.reverse().join("")
}

console.log(reverseString("I am julu"));