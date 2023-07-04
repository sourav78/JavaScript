// Write a JavaScript function to reverse a string by word.

const reverseStringByWord = str => {
    return str.split(" ").reverse().join(" ")
}

console.log(reverseStringByWord("Can give me some food"));