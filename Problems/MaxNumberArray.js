//Find the maximum number in an array of numbers

function maximumNumber(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}

const array = [12, 34, 21, 33, 43, 22, 11]
const maximum = maximumNumber(array);
console.log(maximum);
