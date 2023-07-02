//REverse an array

function reverseArray(arr){
    let arr2 = [];
    let c = 0;
    for(let i = arr.length-1; i>=0; i--){
        arr2[c] = arr[i];
        c +=1;
    }

    console.log(arr2)
}

let array = [12, 34, 21, 11, 32];
reverseArray(array);