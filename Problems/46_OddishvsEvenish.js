// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(num){
    let res = 0
    while(num != 0){
        let rem = num % 10
        res = res + 10 * rem
        num = parseInt(num / 10)
    }

    if(Math.floor(res / 10) % 2 === 0){
        return "Evenish"
    }else{
        return "Oddish"
    }
}

console.log(oddishOrEvenish(4585));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));