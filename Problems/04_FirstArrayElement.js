// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

const firstElement = (arr1, arr2) => {
    let arr = [];
    for(let i = 0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){

        }else{
            arr.push(arr1[i])
        }
    }
    return arr
}

let array1 = [12, 34, 21, 45, 23 ,89]
let array2 = [11, 33, 21, 95, 27 ,89]
const finalArray = firstElement(array1, array2);
console.log(finalArray);