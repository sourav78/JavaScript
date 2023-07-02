//String in Javascript

// String s in javascript are represent using double(" ") quote or single('') quote.

let s = "Souarv" // double quote string
let j = 'Julu'  // single quote string

console.log(s)
console.log(j)

//Index number of string
console.log(s[0]) // index number 0
console.log(s[1]) // index number 1
console.log(s[2]) // index number 2
console.log(s[3]) // index number 3
console.log(s[4]) // index number 4
console.log(s[5]) // index number 5

//traversing a string
console.log("String traversal")
for(let i = 0; i<s.length; i++){
  console.log(s[i])
}

//Template literal in strings

let father = "Samit"
let son = "Dhiren"

let relation = `${father} is father of ${son}` //using backtick(``)
console.log(relation)
console.log(`${father} is father of ${son}`)

//Escape sequence characters

let fruit = 'fruit\'s are very healthy'
console.log(fruit)
let name = "My name is \"souarv\""
console.log(name)
let horizontal = "This is \t Horizontal tabulation"
console.log(horizontal)

console.log("This is \v vertical tabulation")
console.log("This is \v vertical tabulation")
console.log("This is \f page breaking")
console.log("This is \n new line")