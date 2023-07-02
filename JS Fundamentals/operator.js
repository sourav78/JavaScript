// Arithmatic operator
console.log("Arithmatic operator")
a=10;
b=8;

console.log("a+b : "+(a+b)) //addition
console.log("a-b : "+(a-b)) // Substraction
console.log("a*b : "+(a*b)) //Multiplication
console.log("a/b : "+(a/b)) //Division
console.log("a%b : "+(a%b)) //Modulus
console.log("a**b : "+(a**b)) //Exponential

console.log("a-- : "+(a--)) //decreament operator
console.log("a is : "+a) //now the value of a is 9
console.log("--b : "+(--b))

console.log("a++ : "+(a++)) //increament operator
console.log("a is : "+a) //now the value of a is 10
console.log("++b : "+(++b))

//Assignment Operator
console.log("Assignment operator")

let w = 5; //'=' is assignment operator

console.log("x is : "+w)
console.log("+= : "+(w+=4)) // same as w = w+4
console.log("-= : "+(w-=4)) // same as w = w-4
console.log("*= : "+(w*=4)) // same as w = w*4
console.log("/= : "+(w/=4)) // same as w = w/4
console.log("**= : "+(w**=4)) // same as w = w**4
console.log("%= : "+(w%=4)) // same as w = w%4

//Comparison Operator
console.log("Comparison operator")

let x = 5
let y = 6
let z = "5"

console.log("x == y : "+ (x==y))
console.log("x != y : "+ (x!=y))
console.log("x == z : "+ (x==z))
console.log("x === z : "+ x===z)
console.log("x !== z : "+ x!==z)

console.log("x > y : "+ (x>y))
console.log("x >= y : "+ (x>=y))
console.log("x < y : "+ (x<y))
console.log("x <= y : "+ (x<=y))

//Logical Operator
console.log("Logical operator")

let m = 3;
let n = 4;
//logical and(&&)
console.log(m<n && m!=n)
console.log(m<n && m==n)
console.log(m>n && m!=n)
console.log(m>n && m==n)

//logical or(||)
console.log(m<n || m!=n)
console.log(m<n || m==n)
console.log(m>n || m!=n)
console.log(m>n || m==n)

//logical not(!)
console.log(m!=n)
console.log(!false)
console.log(!true)