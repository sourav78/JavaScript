//Functions in java script

// function sum(p, q){
//   return p+q
// }

// let a = 10;
// let b = 29;
// const c = sum(a, b);
// console.log(c)

// Arrow function in js

// const avg = (a, b, c) => {
//     a = Number.parseInt(a);
//     b = Number.parseInt(b);
//     c = Number.parseInt(c);
//     let r = (a+b+c)/3;
//     console.log("The Avarage is : "+r);
//   }
  
//   let a  = prompt("Enter 1st number : ")
//   let b  = prompt("Enter 2nd number : ")
//   let c  = prompt("Enter 3rd number : ")
//   avg(a, b, c)


//different length of argument

//Using argument object

// function sumNums(){
//     // console.log(arguments);

//     let numArr = Array.from(arguments)
//     console.log(numArr);

//     let sum = numArr.reduce((acc, curr) => {
//         return acc + curr
//     }, 0)

//     console.log(sum);
// }



// sumNums(1, 2, 3)
// sumNums(23, 43, 11, 87, 3)
// sumNums(11, 22, 33, 44, 55, 66, 77, 88)

//using rest operator

function addAllNums(...args){
    let sum  = args.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    console.log(sum);
}

addAllNums(23, 43, 11, 87, 3)