// Number Conversion

let s = "33"
let value = Number(s)
// console.log(typeof value)
console.log(value) // this return number

let s1 = "11s"
let value1 = Number(s1)
console.log(value1); // this return NaN --> Not a Number

let s2t = true
let s2f = false
let value2t = Number(s2t)
let value2f = Number(s2f)
console.log(value2t); // this return 1
console.log(value2f); // this return 0

let s3 = null
let value3 = Number(s3)
console.log(value3); // this return 0

let s4 = undefined
let value4 = Number(s4)
console.log(value4); // this return NaN


// Boolean Conversion

let b1 = 1
let bool1 = Boolean(b1)
console.log(bool1); // this return true

let b2 = ""
let bool2 = Boolean(b2)
console.log(bool2); // this return false

let b3 = "sourav"
let bool3 = Boolean(b3)
console.log(bool3) // this return true

let b4 = null
let bool4 = Boolean(b4)
console.log(bool4); // this return false

let b5 = undefined
let bool5 = Boolean(b5)
console.log(bool5); // this return false


//String Conversion

let n1 = 11
let str1 = String(n1)
console.log(str1); // this return 11 as well but i string type
console.log(typeof str1); 

let n2 = true
let str2 = String(n2)
console.log(str2); // return true in string type
console.log(typeof str2);

let n3 = null
let str3 = String(n3)
console.log(str3); // this return null i string type
console.log(typeof str3);