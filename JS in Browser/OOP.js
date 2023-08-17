
// function createUser(){
//     return {
//         username: arguments[0],
//         email: arguments[1],
//         isLogedin: arguments[2]
//     }
// }

// let user1 = createUser("sourav", "sourav@example.com", true)
// let user2 = createUser("Samit", "Samit@example.com", false)
// console.log(user1);
// console.log(user2);

// console.log(this);
// this.name = 12
// console.log(this.name);


//Constructor Function

function user(username, logincount, islogin){
    this.username = username
    this.logincount = logincount
    this.islogin = islogin

    return this
}

// const userOne = user("sourav", 12, true)
// const userTwo = user("Rahul", 10, false) // In this approach first constuctor function overwrite the second one

const userone = new user("sourav", 12, true)
const usertwo = new user("Rahul", 10, false)

console.log(userone);
console.log(usertwo);

//instane of

console.log(userone instanceof user);
console.log(usertwo instanceof user);