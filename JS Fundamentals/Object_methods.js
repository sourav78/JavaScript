
//keys

// const user = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// console.log(Object.keys(user));


//values

// const user1 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// console.log(Object.values(user1));

// //entries

// const user2 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// console.log(Object.entries(user2));

//fromEntries

// const userArray = [['name', 'sourav'], ['course', 'BSC'], ['city', 'Angul']]

// const user3 = Object.fromEntries(userArray)
// console.log(user3);

// const user4 = {
//     name: "Somu",
//     age: 20,
//     gender: "Others"
// }

// const user4Entries = Object.entries(user4)
// const user4NewObject = Object.fromEntries(user4Entries)
// console.log(user4NewObject);


//freeze --> This method freeze the object. We can not change the value of keys or not add a new property

// const user5 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }
// user5.name = "John" // changes reflect on main object
// Object.freeze(user5)
// user5.age = 20  //Changes does not reflect on main object due to 'freeze' method 
// user5.city = "NYC"  //Changes does not reflect on main object due to 'freeze' method 

// console.log(user5);

// //isFrozen --> This will return boolen value either true or false

// console.log(Object.isFrozen(user5));


// seal --> This method seal the object. Means we can change the values of existing properties but can not add a new property

// const user6 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// user6.name = "Peter"  // changes reflect on main object
// Object.seal(user6)
// user6.age = 20  // changes reflect on main object
// user6.city = "NYC"  //Changes does not reflect on main object due to 'seal' method 

// console.log(user6);

// // isSealed --> This will return boolen value either true or false

// console.log(Object.isSealed(user6));


// create

// let tempUser = {
//     name: "Mark",
//     age: 30
// }

// let user7 = Object.create(tempUser)
// user7.city = "Dehli"

// console.log(user7);
// console.log(user7.age);

// console.log("-----");
// for(let i in user7){
//     console.log(i);
// }


//hasOwn --> This will return boolen value either true or false if the property belongs to that object or not

// const user8 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// console.log(Object.hasOwn(user8, "gender"));  //true
// console.log(Object.hasOwn(user8, "city"));  //false


//getOwnPropertyName --> This method will return all the keys of the object

// const user9 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// console.log(Object.getOwnPropertyNames(user9));


//getOwnPropertyDescriptor --> This method define which actions we perform in that percular propertries

// const user10 = {
//     name: "Alex",
//     age: 15,
//     gender: "Male"
// }

// console.log(Object.getOwnPropertyDescriptor(user10, "age"));
// console.log(Object.getOwnPropertyDescriptors(user10));


//defineProperty --> this methos user to define the properties of the object property like writable or enumarable or configurable

// const user11 = {}

// Object.defineProperty(user11, "name", {
//     value: "Loco",
//     writable: false,
//     enumerable: true
// })

// console.log(user11);
// user11.name = "Coco" //Changes does not reflect on main object because we define writable as false means we can not overwrite on that property 
// console.log(user11);


//defineProperty --> this methos user to define the properties of the multiple object-property like writable or enumarable or configurable

let user12 = {}

Object.defineProperties(user12, {
    username: {
        value: "Thor",
        writable: false
    },
    email: {
        value: "thor@gmail.com"
    },
    password: {
        value: "10191",
        writable: true,
        enumerable: false
    }
})

console.log(user12.username);
console.log(user12.password);
