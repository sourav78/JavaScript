//create a method if the name is undefined print "friend" else print that name

function greeting(name){
    if(name === undefined){
        console.log(`Hello Friend`);
    }else if(name === null){
        console.log(`Hello Friend`);
    }else{
        console.log(`Hello ${name}`);
    }
}

let user1 = "sourav"
greeting(user1)

let user2 = undefined
greeting(user2)

//2nd approach --> nullish operater

function greet(name){
    console.log(`Hello ${name ?? "Dost"}`);
}

greet(user1)
greet(user2)

//3rd approach --> terianry operator

function RamRam(name){
    console.log(`Ram Ram ${name == null ? "Dost" : name}`);
}

RamRam(user1)
RamRam(user2)