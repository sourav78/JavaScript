// Singleton Objects
const singletonObject = new Object()

//Nesting in an object literal

const ourUser = {
    email: "sourav@gmail.com",
    usernames:{
        userFullname:{
            firstname: "Sourav Ranjan",
            Lastname: "Sahoo"
        },
        userId: "sourav78"
    }
}

// console.log(ourUser);
// console.log(ourUser.usernames);
// console.log(ourUser.usernames.userFullname);
// console.log(ourUser.usernames.userFullname.Lastname);


//Combining multiple objects

const marks1 = {
    C: 431,
    Cplusplus: 543
}

const marks2 = {
    java: 345,
    javascript: 556
}

// method 1 --> assign
const totalMark = Object.assign({}, marks1, marks2) // {} --> for target object
// console.log(totalMark);

// method 2 --> spread operator
const studentMark = {...marks1, ...marks2}
// console.log(studentMark)


//Make it complex --> more example

const appUser = {
    email: "crazyPanda@gmail.com",
    gamename:{
        userFullname:{
            firstname: "Sourav Ranjan",
            Lastname: "Sahoo"
        },
        gamerId: "sourav78"
    }
}

const statistics = {
    KD: 4.67,
    matches:{
        classic: 55,
        TDM : 112,
        quickMathches: 33
    }
}

const userData1 = {...appUser, ...statistics}
const userData2 = {...appUser.gamename, ...statistics.matches}
const userData3 = {...appUser.gamename.userFullname, ...statistics.matches}
// console.log(userData1)
// console.log(userData2)


//Objects in Array

const users = [
    {
        name: "sourav",
        userId: "sourav78"
    },
    {
        name: "situn",
        userId: "situ21"
    },
    {
        name: "John",
        userId: "JonnyJonnyYesPapa"
    }
]

// console.log(users);
// console.log(users[0]);
// console.log(users[2].userId);

for(let i in users){
    if(users[i].userId == "situ21"){
        // console.log("User Exist");
        // console.log(users[i].userId);
        // console.log(users[i].name);
    }
}


//Access Key, value and elements of an object

const jsUser = {
    name: "sourav",
    "full name": "sourav ranjan sahoo",
    email: "sourav@gmail.com",
    age: 18,
    isLogedin: false,
    lastLoginDays: ["monday", "friday", "saturday"]
}

// console.log(Object.keys(jsUser)); // it return object keys in array format
// console.log(Object.values(jsUser)); // it return object values in array format
// console.log(Object.entries(jsUser)); // it return object keys values pairs in array format

// //check object has a property or not
// console.log(jsUser.hasOwnProperty("isLogedin")); //It return true because it have that property or key
// console.log(jsUser.hasOwnProperty("userId")); //It return false because it don't have that property or key



//All the object methods --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


//Object de-structuring

let vechile = {
    company: "TATA",
    Type: "Truck",
    ownerName: "Sourav ranjan sahoo",
    price: "30L"
}
console.log(vechile.ownerName)

const {company} = vechile  // de-structure an object
console.log(company)

const {ownerName : vName} = vechile // de-structure an object and give them a custom name
console.log(vName);

const {ownerName:owner, price:pri} = vechile;  // de-structure a multiple elements of an object and give them a custom name at once
console.log(owner);
console.log(pri);



//Copy by value

// let gadi = Object.assign({}, vechile)
// vechile.company = "AL"
// console.log(gadi);
// console.log(vechile);