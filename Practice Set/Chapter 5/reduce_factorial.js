// wap use reduce to calculate factorial of a given numbers of an array of first n natural number

let arr = [1, 2, 3, 4, 5, 6, 7]

let res = arr.reduce((r1, r2)=>{
    return r1*r2
})
console.log(res);