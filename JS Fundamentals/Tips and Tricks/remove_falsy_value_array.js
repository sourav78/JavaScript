const myName = ["Sourav", undefined, "Sahoo"]

const fullName = myName.join(" ") // output:- sourav  ranjan --> 2 space
console.log(fullName);

//1st approach

const filterMyName = myName.filter( (name) => name)
const myFullName = filterMyName.join(" ")
console.log(myFullName); //Sourav Sahoo

// 2nd approach

const filterUserName = myName.filter(Boolean)
const userFullName = filterUserName.join(" ")
console.log(userFullName); //Sourav Sahoo