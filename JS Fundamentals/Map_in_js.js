//Map 

let map = new Map()

console.log(map);

//Initialize elements in map

let map1 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])

console.log(map1);

//Methods of Map

//set

let map2 = new Map()
map2.set("username", "John")
map2.set("Work", "Swipper")
console.log(map2);

//chaining

let map3 = new Map()
map3.set("username", "John")
    .set("Work", "Swipper")
    .set("salary", 30000)
console.log(map3);


//keys
let map4 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])

console.log(map4.keys());

for(let i of map4.keys()){
    console.log(i);
}


//values
let map5 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
console.log(map5.values());


//entries
let map7 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
console.log(map7.entries());


//get
let map6 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
console.log(map6.get("role"));
console.log(map6.get("salary"));


//clear -> Removes all the elements from a Map
let map8 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
map8.clear()
console.log(map8);


//delete -> Removes a Map element specified by a key
let map9 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
map9.delete("salary")
console.log(map9);


//has -> Returns true if a key exists in a Map
let map10 = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
console.log(map10.has("role"));
console.log(map10.has("department"));


//Map from object

const emp = {
    name: "Peter",
    id: 112,
    role: "Developer",
    salary: 40000
}

let empMap = new Map(Object.entries(emp))
console.log(empMap);


//size
let mapss = new Map([
    ["name", "sourav"],
    ["role", "Developer"],
    ["salary", "80000"]
])
console.log(mapss.size);