//Singleton object -- discuss latter


// Object Litterals

const jsUser = {
    name: "sourav",
    "full name": "sourav ranjan sahoo",
    email: "sourav@gmail.com",
    age: 18,
    isLogedin: false,
    lastLoginDays: ["monday", "friday", "saturday"]
}

//access objects elements
console.log(jsUser.email); // this method has some exception
// console.log(jsUser."fulll name") //because it throws systx error

console.log(jsUser["name"]); // --> We prefer this method
console.log(jsUser["email"]);

// Overwrite or update value in an object

jsUser["age"] = 22
console.log(jsUser)

//Freez object 

Object.freeze(jsUser) // Now we cannot change the value in an object
jsUser["email"] = "sourav@figma.org"
console.log(jsUser)


// Making Function with objects
console.log("Making Function with objects");

const jsUser2 = {
    name: "Julu",
    "full name": "sourav ranjan sahoo",
    email: "souravGithub@gmail.com",
    age: 15,
    isLogedin: false,
    lastLoginDays: ["tuesday", "saturday"]
}

jsUser2.info = function(){
    console.log("We make a function in object");
}
console.log(jsUser2.info); // It return a ananymous function
jsUser2.info()

jsUser2.printDetails = function (){
    console.log(`Your name: ${this.name}`);
    console.log(`Your age: ${this.age}`);
    console.log(`Login details: ${this.lastLoginDays}`);
}
jsUser2.printDetails()


jsUser2.ageAfter = function (addingAge) {
    console.log(`Your age after ${addingAge} years: ${this.age+addingAge}`);
}
jsUser2.ageAfter(15)
jsUser2.ageAfter(35)

