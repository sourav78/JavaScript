// Promise.all() polyfil

// function customPromiseAll(promiseArr){
//   return new Promise((resolve, reject) => {

//     let result = []

//     for(let i = 0; i < promiseArr.length; i++){
//       promiseArr[i].then((data) => {
//         result[i] = data

//         if(i === promiseArr.length - 1){
//           resolve(result)
//         }

//       }).catch((err) => {
//         reject(err)
//       })
//     }

//   })
// }


// function customPromiseAllSettled(promiseArr){
//   return new Promise((resolve, reject) => {

//     let result = []

//     for(let i = 0; i < promiseArr.length; i++){
//       promiseArr[i].then((data) => {
//         result[i] = data
//         if(i === promiseArr.length - 1){
//           resolve(result)
//         }
//       }).catch((err) => {
//         result[i] = err
//         console.log(err);
        
//         if(i === promiseArr.length - 1){
//           resolve(result)
//         }
//       })
      

//     }

//   })
// }

// function createAsyncTask(data, time, needToReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (needToReject) {
//         reject(`${data} is rejected`);
//       } else {
//         resolve(data);
//       }
//     }, time);
//   });
// }

// const p1 = createAsyncTask("p1", 400);
// const p2 = createAsyncTask("p2", 1000, 1);
// const p3 = createAsyncTask("p3", 500);
// const p4 = createAsyncTask("p4", 3000);

// customPromiseAllSettled([p1, p3, p2, p4]).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })


//Varible Shadowing

// function shadowing(){

//   let a = "Hello"

//   if(true){
//       let a  = "Hiiii"  // This a varible shadow the parent varible in this scope
//       console.log(a);
//   }

//   console.log(a);

// }

// shadowing()


// Polyfill Of Map()

// Array.prototype.customMap = function(callback){
//   let result = []

//   for(let i = 0; i < this.length; i ++){
//     result.push(callback(this[i], i, this))
//   }

//   return result
// }


// // Polyfill of filter

// Array.prototype.customFilter = function(callback){

//   let result = []

//   for(let i = 0; i < this.length; i++){
//     if(callback(this[i], i, this)){
//       result.push(this[i])
//     }
//   }

//   return result

// }


// // Polyfill of reduce

// Array.prototype.customReduce = function(callback, initiaValue){
//   let result = initiaValue ?? 1

//   for(let i = 0; i < this.length; i++){
//     result = result ? callback(result, this[i], i, this) : this[i]
//   }

//   return result;
// }


// const numArr = [2, 4, 6, 8]

// const newCustomArr = numArr.customMap((element, index, array) => {
//   //Logic
//   return element + 10
// })
// console.log(newCustomArr);

// const newCustomFilter = numArr.customFilter((ele) => {
//   return ele < 7
// })

// console.log(newCustomFilter);

// const multipleOfEachElement = numArr.customReduce((accumulator, element, index, array) => {
//   return accumulator *= element
// }, 1 /*Here 1 is the initial value of accumulator*/)

// console.log(multipleOfEachElement);


// Function expression

// const fe = function(){
//   return "Hello"
// }

// console.log(fe());

(function yoo(){
  console.log("Hello");
})()


function sum(a, b){
  return a + b;
}

console.log(sum(2, 4));

// my name is sourav ranjan sahoo

// Thiskey board not lioke i expected.
