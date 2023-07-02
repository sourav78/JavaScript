// for(let i = 0; i<10; i++){
//   console.log(i);
// }

// for(let j = 1; j<100; j++){
//   console.log(j)
// }

//wap to add first n narural numbers

let a =prompt("Enter a number : ")
a = Number.parseInt(a);
let sum = 0;

for(let i = 1; i<=a; i++){
  sum +=i;
}
console.log("Sum of first "+a+" natural numbers is "+sum);

