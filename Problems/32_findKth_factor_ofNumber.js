// The kth Factor of n
// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

const findFactor = (num, kth) => {
    let allFactor = []
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            allFactor.push(i)
        }
    }
    if(kth > allFactor.length){
        return -1
    }else{
        return allFactor[kth-1]
    }

}

console.log(findFactor(4, 4));