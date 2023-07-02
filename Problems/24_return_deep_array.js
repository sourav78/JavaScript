//Write a method that returns a deep array like [[key, value]]

// const returnDeepArray = (obj) => {
//     const deepArray = Object.entries(obj)
//     return deepArray
// }
const returnDeepArray = (obj) => {
    deepArray = []
    for(let ele in obj){
        deepArray.push([ele, obj[ele]])
    }
    return deepArray
}

const obj = {
    name : "sourav", 
    age: 18,
    colege: "creative techno colege"
}

console.log(returnDeepArray(obj))