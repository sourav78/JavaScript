//55. Create a function that calculates the number of different squares in an n * n square grid.
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55

// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

function numberSquares(num) {

    let total = 1

    if(num === 0){
        return 0
    }else if(num === 1){
        return 1
    }else{
        for(let i = 2; i <= num; i++){
            total = total + (i ** 2)
        }
    }
    return total
}

console.log(numberSquares(2));
console.log(numberSquares(4));
console.log(numberSquares(5));