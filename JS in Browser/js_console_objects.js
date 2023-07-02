console.log(console)  // It showm All the console objects like log, error, assert etc.


// console.log(): Outputs a message to the console.
console.log("Hyy There") 

// console.error(): Outputs an error message to the console.
console.error("This an error");
console.error("This an second error meassege");

//console.assert(): Writes an error message to the console if the assertion is false.
console.assert(12>23) //it will show error in browser console
console.assert(!true) 

//console.clear(): Clears the console.
// console.clear();

//console.table(): Displays tabular data as a table.
let obj = {
    "sourav":89,
    "Samit":78,
    "Dhiren":69,
    "Tushar":55
}
console.table(obj)

//console.warn(): Outputs a warning message to the console.
console.warn("Hey, Dont touch the code!!!")

//console.info(): Outputs an informational message to the console.
console.info("Hey This an information")

// //console.time(): Starts a timer.
// console.time(1, 3)