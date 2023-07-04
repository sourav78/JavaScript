// Write a JavaScript function to find the most frequent item of an array.

const findFrequentItem = arr => {
    let count = 0
    let countM = 0
    let item;

    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++
            }
            if(countM < count){
                countM = count
                item = arr[i]
            }
        }
        count = 0
    }

    return `${item} (${countM} times)`
}

console.log(findFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3]));
console.log(findFrequentItem([1, 2, 3, 1, 4, 1]));