
const user = {
  name: "Sourav",
  age: 20,
  "space key": true //If you want to make a key with spaces then convert it key of string. Like this
}

// Modify the object
user.name = "Julu"

// Delete an object key -> Delete keyword onnly delete the property of an object not a variable
delete user.age

// To access to key with space
console.log(user["space key"]);

console.log(user);


// To add dynamic key value pair in the object

let property = "FirstName"
let value = "Sourav R."

const dynamicOject = {
  [property]: value //To make it dynamic palce the key varible in square brackets.
}
console.log("Dynamic Object", dynamicOject);


// Itreate through the object

const user2 = {
  name: "Sourav",
  age: 20,
  gender: "Male"
}

// Itreate in keys -> Use for in loop
for (key in user2) {
  console.log(key, user2[key]);
}

// Itreate through values
for (key in user2) {
  console.log(user2[key]);
}

// Extract all the keys of object
console.log(Object.keys(user2));

// Extract all the values of object
console.log(Object.values(user2));

// Extract all the entries of object
console.log(Object.entries(user2));


// Interview Qestions 

// q.1 -> What is the output

const obj = {
  a: "one",
  b: "two",
  a: "three"
}

/**
 * The output is { a: three, b: two }.
 * Because last define value will override the previous values
 */
console.log(obj);


// q.2 -> Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

const nums = {
  a: 200,
  b: 50,
  c: "Hello",
  d: 2
}

multiplyByTwo(nums)
console.log(nums);

// Solution
function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2
    }
  }
}



// q.3 -> What id the output

a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 143
a[c] = 555

console.log(a[b]);
/**
 * This code give output 555 because
 * becuse when your assin object as a key then it automatically converted into [object object]
 * so when you assign a[b] -it converted into-> a["[object object]"] = 143
 * also in a[c] -it converted into-> a["[object object]"] = 555 => (Override the previous Value)
 * So when you access it it only have one value that is "[object object]" = 555
 */



// q.4 -> What is JSON.strigify and JSON.parse

const user4 = {
  name: "Sourav",
  gender: "Male"
}

// JSON.strigify() -> This function is used to convert a object into string object.

const strObj = JSON.stringify(user4)
console.log(strObj);

// JSON.parse() -> This function is used to convert a string object to a js object

const userObj = JSON.parse(strObj)
console.log(userObj);


// q.5 -> What is the output

console.log([..."Hello"]); //Array of string -> ['H', 'e', 'l', 'l', 'o']


// q.6 -> Waht is the output

const settings = {
  user: "Hello",
  level: 20,
  health: 90
}

const strSet = JSON.stringify(settings, ["level", 'health'])
console.log(strSet);
/**
 * JSON.stringify(settings, ["level", 'health']) ==output=> {"level":20,"health":90}
 * In this case it only strigify the provided keys and ignore other properties
 * if provided keys are not present in the object then it strigify the empty obejct => {}
 */



// q.7 -> What is the output
shape = { 
  radius: 10, 
  diameter() { 
    return this.radius * 2;
  }, 
  perimeter: () => 2 * Math.PI * this.radius, //Here this.radiour is "undefined"
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN -> Not a number
/**
 * In diameter() function that is a normal function
 * In normal function "this" keyword is always point to parent object (In this case "Shape")
 * So it find the value of radius -> 10
 * 
 * In Perimeter() function which is arrow function
 * In arrow function "this" keyowrd is always point to the window object.
 * So radius property is not available in the window object
 * So the value of radius -> undefined
 */



// q.8 -> What is destrucring on Objects

/**
 * Destrucring means extracting values from an object and assign them to a variable
 */

let admin={ 
  name:"Piyush", 
  age:24,
  fullName: {
    first: "Piyush R.",
    last: "Jain"
  } 
}

// ex -> Destrucring name property from admin obejct
const {name} = admin
console.log(name);

// Assining to new variable
const {name:adminName} = admin
console.log(adminName);

// Nested destrcring
const {fullName:{first}} = admin
console.log(first);

// Nested destrcring -> Assigning to a new varible
const {fullName:{first: adminFirstName}} = admin
console.log(adminFirstName);



// q.9 -> What is the output

// Problem

// function getItems(fruitList, ...args, favoriteFruit) { 
//   return [...fruitList, ...args, favoriteFruit] 
// }

// Solution

function getItems(fruitList, favoriteFruit, ...args) { 
  return [...fruitList, ...args, favoriteFruit] 
}

getItems(["banana", "apple"], "pear", "orange")

/**
 * Here in the getItems() funtion this is syntax error.
 * Because ...args which is rest parameter is always pass at the end.
 * But the speared operator can be passed in the middle -> No problem
 */



// q.10 -> What is the output.

let e = { greeting: 'Hey!' };
let d;

d = e;
e.greeting = 'Hello';
console.log("Reference", d.greeting); // Hello

/**
 * Here the value of d is also changed.
 * Because "d" is refrencing to the object "c"
 * Remember we not copying the object. We just refrencing to the object
 */

// To copy the object 

let g = { greeting: 'Hey!' };
let h;

h = {...g}
g.greeting = "Yoooo"
console.log("Copy", h.greeting);



// q.11 -> What is the output

console.log({a: 1} == {a: 1});
// console.log({a: 1} === {a: 1});

console.log(e == d); // q.10
console.log(e === d); // q.10

/**
 * Both Of the condition return false.
 * Because All the objects are pointing to the different memory location.
 * Condition is true when Both objects are referencing to the same memory location
 */



// q.12 -> What is the output

let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members); // [{ name: 'Lydia' }]

let person2 = { name: 'Lydia' };
const members2 = [person2];
person2.name = null;

console.log(members2); // [{ name: null }]



// q.13 -> What is the output

const value2 = { number: 10 };

const multiply = (x = { ...value2 }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value2); // 20
multiply(value2); // 40

/**
 * In first 2 function call its value is 20 because we just copy the object
 * But in the 3 and 4 function its value changes because we passing the refrence of the object
 */



// q.14 -> What is the output

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: 'John',
    age: 50
  };

  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

/**
 * personObj1 = { name: 'Alex', age: 25 }
 * personObj2 = { name: 'John', age: 50 }
 * 
 * For personObj1 it only change the age but not the whole object
 * Because When it reassign the person object it not changed the main object
 */



//q.15 -> Shallow Copy and Deep Copy

// Shallow Copy
/**
 * In Shallow copy we clone the object to another but it still have refrence to its nested object.
 * In other word, Nested objects are not copied.
 * So When you changed value of nested object in the main object it also refrect on the copied object.
 */

// Shallow Copy - 1
const ObjCopy = {
  username: "Sourav",
  age: 20,
  fullName: {
    first: "Sourav R.",
    last: "Sahoo"
  }
}

const newCopy = {...ObjCopy}

ObjCopy.fullName.first = "Copy Name"

console.log(newCopy);


// Shallow Copy - 2

const ObjCopy2 = {
  username: "Sourav",
  age: 20,
  fullName: {
    first: "Sourav R.",
    last: "Sahoo"
  }
}

const newCopy2 = Object.assign({}, ObjCopy2)

ObjCopy2.fullName.first = "Copy Name"

console.log(newCopy2);


// Deep Copy
/**
 * In Deep copy the whole object is cloned or copied with its nested objects.
 */

const ObjCopy3 = {
  username: "Sourav",
  age: 20,
  fullName: {
    first: "Sourav R.",
    last: "Sahoo"
  }
}

const newCopy3 = JSON.parse(JSON.stringify(ObjCopy3))

ObjCopy3.fullName.first = "Copy Name"

console.log(newCopy3);