// Create a function that will merge two arrays and return the result as a new array

function mergeArray(arr1, arr2){
    // let newArray = [];
    let c = 0
    for(let i = 0;i <arr2.length; i++){
        if(arr1.includes(arr2[i])){ //this is for duplicate elements

        }else{
            arr1.push(arr2[i]);
        }
    }
    return arr1;
}

let array1 = [12, 32, 43, 12, 35];
let array2 = [11, 92, 48, 72, 36, 33, 90, 12];
// console.log(array1.includes(array2[7]))
let newArray = mergeArray(array1, array2);
console.log(newArray);