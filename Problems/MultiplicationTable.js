//Wap For Multiplication Table

const prompt = require('prompt-sync')();

const multi = (n) => {
    for(let i = 1; i<=10; i++){
        
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

const number = prompt("Enter Your Table : ");
multi(number);