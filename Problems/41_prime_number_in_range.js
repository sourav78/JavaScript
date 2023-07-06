// Write a function that will return an array of all prime numbers in a given range

const primeNumber = (start, end) => {
    let primeNumbers = []
    let flag
    for(let i = start; i <= end; i++){
        if(i == 1 || i == 0) continue

        flag = 1
        for(let j = 2; j < i/2; ++j){
            if(i % j == 0){
                flag = 0
                break
            }
        }

        if(flag == 1){
            primeNumbers.push(i)
        }
    }

    return primeNumbers
}

console.log(primeNumber(100, 200));