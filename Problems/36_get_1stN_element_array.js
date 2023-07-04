// Write a JavaScript function to get the first 'n' elements of an array.

const getFirstNElement = (arr, n) => {
    let newArr = []
    if(n > arr.length){
        return arr
    }else{
        for(let i = 0; i < n; i++){
            newArr.push(arr[i])
        }
    }

    return newArr
}

//ex-2 ==> using slice method

const getElem = (arr, n) => {
    if(n > arr.length){
        return arr
    }else{
        return arr.slice(0, n)
    }
}

console.log(getFirstNElement([1, 2, 3, 4, 5, 6], 4));
console.log(getFirstNElement([1], 4));

console.log(getElem([1, 2, 3, 4, 5, 6], 4));