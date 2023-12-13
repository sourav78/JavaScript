
const mathModule = require("./mathModules")
// const {add, mulFn} = require("./mathModules") // Destucturing the object function

const add = mathModule.add

console.log(mathModule.mulFn(2, 5));
console.log(add(12, 11));