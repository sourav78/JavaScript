//The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const input = "Sourav Samit Rahul Gabar"

let initialLetter = input.split(" ").map( (name) => name[0]).join("")

console.log(initialLetter);