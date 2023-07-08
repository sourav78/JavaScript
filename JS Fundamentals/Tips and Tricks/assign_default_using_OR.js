
function getUserName(name){
    return name
}

// Lenthy Code

let userName = getUserName("julu")

if(userName == null){
    userName = "DOM"
}
console.log(userName);

//short Code

let userName1 = getUserName("") || "DOM"
console.log(userName1);