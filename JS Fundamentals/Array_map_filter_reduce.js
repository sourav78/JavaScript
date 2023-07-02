let arr = [12, 32, 11, 21, 24, 8, 3, 43]
// console.log(arr.length)

// map: Creates a new array by applying a provided function to each element in the array.
let newArr = arr.map((ele)=>{
    // console.log(ele)
    return ele
})
console.log(newArr);

let check = arr.map((element, ind, arr)=>{
    // console.log(element, ind, arr)
    console.log("Array Element : "+element);
    console.log(element+" index : "+ind);
    console.log("Whole array "+arr)
})

let metod = arr.map((ele)=>{
    return (ele*10)
})
console.log(metod);


// filter: Creates a new array with all elements that pass a provided testing function.
console.log("Filter Function");
let fil = [12, 32, 11, 21, 24, 8, 3, 43]

let filterItem = arr.filter((ele)=>{
    return ele%2==0
})
console.log(filterItem);

let greaterIndex = arr.filter((element, index)=>{
    return index > 4
})
console.log(greaterIndex)

let greaterItem = arr.filter(ele => {
    return ele>20
})
console.log(greaterItem);



// reduce: Applies a function against an accumulator and each element in the array to reduce it to a single value.
console.log("Reduce Function");
let red = [14, 32, 11, 25, 24, 8, 6, 44]

let reduceValue = red.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
})
console.log(reduceValue);

let exp = red.reduce((a, c)=>{
    return a+c-1;
})
console.log(exp);