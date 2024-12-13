
//Q.1

function createBase(num1){
  return function(num2){
    console.log(num1+ num2);
  }
}

var addSix = createBase(6);
addSix(10) // 16
addSix(34) // 40

//Q.2 -> Time Optimization


// Without Optimise

// function find(index){

//   let a = []

//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i
//   }

//   console.log(a[index]);
// }

// console.time("6")
// find(6)
// console.timeEnd("6")

// console.time("500")
// find(500)
// console.timeEnd("500")


// With Optimise
function find(){

  let a = []

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }

  return function(index){
    console.log(a[index]);
  }
}

const optTime = find()

console.time("6")
optTime(6)
console.timeEnd("6")

console.time("500")
optTime(500)
console.timeEnd("500")


// Q.3 -> Create a private counter

function counter(){
  let _count = 0

  function add(increment){
    _count += increment
  }

  function display(){
    console.log("Counter = ", _count);
  }

  return {
    add,
    display
  }

}

const c = counter()

c.add(2)
c.add(10)

c.display() //12