let temp = [11, 12, 13, 14, 15, 16]

for(let i = 0; i<temp.length; i++){
    console.log(temp[i]);
}

//array forEach loop
//printing squareof array elements
let sikar = 3
console.log("array forEach loop");
temp.forEach((element)=>{
    console.log(element+element);
    // console.log(element*sikar);
})

temp.forEach((add)=>{
    console.log(add+" : "+(add+10));
})

//from: Creates a new, shallow-copied array from an array-like or iterable object.
console.log("from");
let a = "sourav ranjan sahoo"
let b = Array.from(a)
console.log(b);

//for of loop => It ptint the value of an array
console.log("for of loop");
for(let i of temp){
    console.log(i);
}

//for in loop => It print the keys or index number of an array
console.log("for in loop");
for(let i in temp){
    console.log(i);
    console.log(temp[i]);
}