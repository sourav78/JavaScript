const prompt = require('prompt-sync')();

let n = 0;
let userWin = 0;
let compWin = 0;
while(n<5){
    let game = ["snake", "water", "gun"];
    let comp = game[Math.floor(Math.random()*game.length)];

    console.log("1. "+game[0])
    console.log("2. "+game[1])
    console.log("3. "+game[2])
    let userMove = prompt("Enter your Move: ")
    userMove = Number.parseInt(userMove);
    let user = game[(userMove-1)];
    if(user == comp){
        console.log("Round draw");
    }else if(user == "snake" && comp == "water"){
        console.log("You won the round")
        userWin +=1;
    }else if(user == "water" && comp == "gun"){
        console.log("You won the round")
        userWin +=1;
    }else if (user == "gun" && comp=="snake") {
        console.log("You won the round")
        userWin +=1;
    }else if(comp == "snake" && user == "water"){
        console.log("You lose the round")
        compWin +=1;
    }else if(comp == "water" && user == "gun"){
        console.log("You lose the round")
        compWin +=1;
    }else if(comp == "gun" && user == "snake"){
        console.log("You lose the round")
        compWin +=1;
    }else{
        console.log(comp);
    }

    n++
}

console.log("Match Over!!!");
console.log("User Score: "+userWin);
console.log("Computer Score: "+compWin);
if(userWin > compWin){
    console.log("Congratulation!!! You won the game :)");
}else if(userWin == compWin){
    console.log("Match id Draw!!!");
}else{
    console.log("You Lose the game :(");
}
