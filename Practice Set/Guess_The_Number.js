//Write a js program to generate a random number between 1 to 100 and store it in a variable.The program then takes input from user to tell them wheather the guess was correct, lesser or greater than the original number.
// 100 - (no. of guesses) is the score of the user. The program is expected to terminate when the number is guessed.

const prompt = require('prompt-sync')();

let ran = Math.floor((Math.random()*100)+1)
let score = 0
while (true) {
    let user = prompt("Enter The Number : ")
    user = Number.parseInt(user);
    if(user == ran){
        console.log("\n\n")
        console.log("Hurray... You guess the right number :)")
        score +=1
        break
    }else if(user < ran){
        console.log("You Guess the small number :(")
        score +=1
    }else if(user > ran){
        console.log("You Guess the bigger number :(");
        score +=1
    }
}

console.log("You Scored : "+(100-score))