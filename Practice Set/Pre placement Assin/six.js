//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const checkDistinctArray = (arr) => {
    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return true
            }
        }
    }
    return false
}

console.log(checkDistinctArray([1,2,3,1]));