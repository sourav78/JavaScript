

const prompt = require('prompt-sync')();

let arr = [12, 32, 43, 23, 42]

while(true){
    let user = prompt("Enter element : ")
    user = Number.parseInt(user)
    if(user == 0){
        break;
    }else{
        arr.push(user)
    }
}
console.log(arr)