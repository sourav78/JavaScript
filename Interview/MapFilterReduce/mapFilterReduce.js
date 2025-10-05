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


// let students = [
//     {
//         name: "Piyush",rollNumber: 31, marks: 80
//     }, {
//         name: "Jenny", rollNumber: 15, marks: 69
//     }, {
//         name: "Kaushal", rollNumber: 16, marks: 35
//     }, {
//         name : "Dilpreet" , rollNumber: 7, marks: 55
//     }
// ]

// const result = students.map((student) => student.marks < 60 ? student.marks + 20 : student.marks)
//                         .filter(marks => marks > 60)
//                         .reduce((acc, marks) => acc+= marks, 0)

// console.log(result);



//q1. Given an array of objects users, print fullname.

const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

let fullUser = users.map((user) => user.firstName+" "+user.lastName)

console.log(fullUser);

// Q2. Given an array of objects users, print user of particular age along with their frequency.

const users1=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

let agedUser = users1.reduce((acc, user) => {
    if(acc[user.age]){
        acc[user.age] += 1
    }else{
        acc[user.age] = 1
    }

    return acc
}, {})

console.log(agedUser);

//Q3.Print object having marks greater than 60 and rollNumber greater than 15.

let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

student.forEach(stud => stud.rollNumber > 15 && stud.marks > 60 && console.log(stud))


//Q4.Print sum of marks of all the student

let student1 =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

let TotalMarks = student1.reduce((total, stud) => {
    total += stud.marks

    return total
}, 0)

console.log(TotalMarks);



//Q5.List of all firstName from array whose age is more than 30

const users2=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"Cob",age:75},
  {firstName:"Sam",lastName:"Lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

let userArr = users2.filter(user => user.age > 30).map(filterdUser => filterdUser.firstName)

console.log(userArr);


// Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let student2 =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

let totalMarks = student2
                    .map(stud => stud.marks < 60 ? {...stud, marks: stud.marks+20} : stud)
                    .filter(stud => stud.marks > 60)
                    .reduce((total, stud) => total += stud.marks, 0)

console.log(totalMarks);
