const nums = [1,2,2,4]


function modifyDuplicate(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            return [arr[i], arr[i]+1]
        }
    }
}

console.log(modifyDuplicate(nums));