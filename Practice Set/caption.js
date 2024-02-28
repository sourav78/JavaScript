// show()

// function show(){
//     console.log("Hello");
// }

// a = 1
// console.log(a);
// var a

// function doSomething(){
//     a = 33
//     console.log(a);
//     var a
// }

// doSomething()

// let x = 3
// let y = "3"
// console.log(x-y);

// console.log(typeof(NaN));
// console.log(isNaN(true));

// IIFE
// (function doSomething(){
//     console.log("Log immidiatly");
// })();

// function higherOrder(fn) {
//     fn();
// }
// higherOrder(function () { 
//     console.log("Hello world") 
// }); 

// function doSomething() {
//     console.log(this);
//   }

//   doSomething();

// const obj = {
//     name: 'John',
//     sayName: function () {
//         // console.log(this.name); // Output: John

//         function innerFunc(){
//             console.log(this.name); // Output: John
//         };

//         innerFunc();
//     }
// };

// obj.sayName();

// (function () {
//     var counter = 0;

//     function increment() {
//         counter++;
//         console.log("Counter:", counter);
//     }

//     increment();
//     increment();
// })();

let a = 14

function add(b){
    return a+b
}
console.log(add(2));