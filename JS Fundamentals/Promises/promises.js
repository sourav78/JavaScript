
//Promise has 2 phase 

// Creation

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("inside set timeout");
//         if(false){
//             resolve("Promise fulfilled.")
//         }else{
//             reject("Promise Fialed.")
//         }
//     }, 2000)
// })

//Consumption
// console.log(p1);

// p1.then(function(data){
//     console.log("Done", data);
// }).catch(function(err){
//     console.log("Error", err);
// }).finally(function(){
//     console.log("Finnaly excuted.");
    
// })


// console.log("Four");

//Create secret keys is js

// const obj = {}
// const syste = Symbol("lll")

// obj[syste] = "Hello"

// console.log(Object.keys(obj));



//Promise.all

function createAsyncTask(data, time, needToReject){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(needToReject){
                reject(data)
            }else{
                resolve(data)
            }
        }, time);
    })
}

const a1 = createAsyncTask("a1", 1000, 1)
const a2 = createAsyncTask("a2", 2000)
const a3 = createAsyncTask("a3", 100)
const a4 = createAsyncTask("a4", 700)

// a1.then(console.log)
// a2.then(console.log)
// a3.then(console.log)
// a4.then(console.log)

// Promise.all([a1, a3, a2, a4]).then((data) => { //Maximum time is 1000+2000+100+700
//     console.log(data);
// })

// Promise.allSettled([a1, a3, a2, a4]).then((data) => {
//     console.log(data);
// })

// Promise.race([a1, a3, a2, a4]).then((data) => {
//     console.log(data);
// })

Promise.any([a1, a3, a2, a4]).then((data) => {
    console.log(data);
}) 