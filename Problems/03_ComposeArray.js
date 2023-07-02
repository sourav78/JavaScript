// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function composeArray(arr1, arr2){
    let newArray = [];
    let c = 0
    for(let i = 0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){

        }else{
            newArray.push(arr1[i]);
        }
    }
    for(let i = 0; i<arr2.length; i++){
        if(arr1.includes(arr2[i])){

        }else{
            newArray.push(arr2[i])
        }
    }

    return newArray
}

let array1 = [11, 13, 15, 17, 20];
let array2 = [12, 14, 15, 18, 20];

let newArray = composeArray(array1, array2);
console.log(newArray);