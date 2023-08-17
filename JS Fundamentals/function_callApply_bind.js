
// function printName(name){
//     console.log(`Hi ${name}`);
// }

// printName.age = 19

// printName("sourav")

// console.log(printName);

//Call Method

// const user1 = {
//     name: "sourav",
//     greetings: function(){
//         console.log(`Heloo ${this.name}`);
//     }
// }
// user1.greetings()

// const user2 = {
//     name: "Rahul"
// }

// const user3 = {
//     name: "Manisha"
// }

// function borrowing --> borrow function from one object to another

// user1.greetings.call(user2) //Heloo Rahul
// user1.greetings.call(user3) //Heloo Manisha


// function printName(){
//     console.log(`Welcome ${this.name}`);
// }


// const per1 = {
//     name: "John"
// }
// const per2 = {
//     name: "Peter"
// }

// //function borrowing --> borrow function from window object

// printName.call(per1)
// printName.call(per2)

//print other value

// function companyEmp(city, age){
//     console.log(`Hi, I am ${this.name} from ${city} age of ${age}`);
// }

// const emp1 = {
//     name: "Iron man"
// }
// const emp2 = {
//     name: "Hulk"
// }

// companyEmp.call(emp1, "NY", 40)
// companyEmp.call(emp2, "Kolkata", 45)


// //Apply method
// // => apply() take other arguments as array
// console.log("apply method");

// const emp3 = {
//     name: "Sourav"
// }
// const emp4 = {
//     name: "Dinesh"
// }

// companyEmp.apply(emp3, ["angul", 19])
// companyEmp.apply(emp4, ["Puri", 23])


//bind method
//bind methos always return a function

const product1 = {
    pname: "TV",
    allDeatils: function(pirce, ratting){
        console.log(`${this.pname} at RS. ${pirce} with ${ratting} star ratting`);
    }
}

const product2 = {
    pname: "Mobile"
}
const product3 = {
    pname: "Cooler"
}

let p1Bind = product1.allDeatils.bind(product2, 24000, 4.5)
let p2Bind = product1.allDeatils.bind(product3, 12000, 4)

p1Bind();
p2Bind()