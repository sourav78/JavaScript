//Functions in java script

// function sum(p, q){
//   return p+q
// }

// let a = 10;
// let b = 29;
// const c = sum(a, b);
// console.log(c)

// Arrow function in js

const avg = (a, b, c) => {
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    c = Number.parseInt(c);
    let r = (a+b+c)/3;
    console.log("The Avarage is : "+r);
  }
  
  let a  = prompt("Enter 1st number : ")
  let b  = prompt("Enter 2nd number : ")
  let c  = prompt("Enter 3rd number : ")
  avg(a, b, c)