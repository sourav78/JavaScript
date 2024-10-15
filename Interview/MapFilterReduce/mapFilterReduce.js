//Map filter Reduce

//Map

const numArr = [1, 3, 4, 6, 7, 2]

// const newArr = numArr.map((element, index, array) => {
//     //Logic
//     return element * 2
// })

// console.log(newArr);

//Polyfil for map

// Array.prototype.customMap = function(callback){
//     const resultArr = []

//     for (let i = 0; i < this.length; i++) {
//         resultArr.push(callback(this[i], i, this))
//     }

//     return resultArr;
// }

// const newCustomArr = numArr.customMap((element, index, array) => {
//     //Logic
//     return element + 10
// })
// console.log(newCustomArr);


//FIlter

// const numArr = [1, 3, 4, 6, 7]

// const newFilterArr = numArr.filter((element, index, arr) => {
    
//     //Logic -> filter those element those modulo is 0
//     return element % 2 === 0
// })

// console.log(newFilterArr);


//Polyfils Of filter

// Array.prototype.customFilter = function(callback) {
//     const resultArr = [];

//     for (let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this)){
//             resultArr.push(this[i])
//         }       
//     }

//     return resultArr
// }

// const newCustomFilterArr = numArr.customFilter((element, index, arr) => {
    
//     //Logic -> filter those element greater than 3
//     return element > 3
// })
// console.log(newCustomFilterArr);


//Reduce

// const numArr = [1, 3, 4, 6, 7]

// const multipleOfEachElement = numArr.reduce((accumulator, element, index, array) => {
//     return accumulator *= element
// }, 1 /*Here 1 is the initial value of accumulator*/)

// console.log(multipleOfEachElement);


//Polyfils for reduce

// Array.prototype.customReduce = function(callback, initialValue){
    
//     let result = initialValue;

//     for(let i = 0; i < this.length; i++){
//         result = result ? callback(result, this[i], i, this) : this[i]
//     }

//     return result;
// }

// const multipleOfEachElement = numArr.customReduce((accumulator, element, index, array) => {
//     return accumulator *= element
// }, 1 /*Here 1 is the initial value of accumulator*/)

// console.log(multipleOfEachElement);


let students = [
    {
        name: "Piyush",rollNumber: 31, marks: 80
    }, {
        name: "Jenny", rollNumber: 15, marks: 69
    }, {
        name: "Kaushal", rollNumber: 16, marks: 35
    }, {
        name : "Dilpreet" , rollNumber: 7, marks: 55
    }
]

const result = students.map((student) => student.marks < 60 ? student.marks + 20 : student.marks)
                        .filter(marks => marks > 60)
                        .reduce((acc, marks) => acc+= marks, 0)

console.log(result);
