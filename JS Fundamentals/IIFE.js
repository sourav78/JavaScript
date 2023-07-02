// IIFE --> Immediately Invoked Function Execution
//Defination --> A function that runs the moment it is invoked or called in the JavaScript event loop

//Normal Function
// function drink(){
//     console.log("I drink Coca Cola");
// }
// drink()

//IIFE
//named IIFE
(function drink(){
    console.log(`You need to drink some water`);
})(); //When IIFE function is executed we need to close the function using ';'

//Unnamed IIFE
( (name) => {
    console.log(`Your Name ${name}`);
})("sourav");

//Example
function myFunction(proffesion){
    console.log("Hyy, I am using VS Code");
    (function (){console.log("Can you give me hotspot");})();
    console.log(`I am a ${proffesion}`);
}
myFunction("Developer")