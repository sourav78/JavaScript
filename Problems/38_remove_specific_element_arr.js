//Write a JavaScript function to remove a specific element from an array.

const removeEle = (arr, ele) => {
    let ind = arr.indexOf(ele)
    if(arr.includes(ele)){
        arr.splice(ind, 1)
        return arr   
    }else return -1
}

console.log(removeEle([1, 2, 3, 4], 2));
console.log(removeEle([1, 3, 4, 7, 11, 33, 54, 78], 2));