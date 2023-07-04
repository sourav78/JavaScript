//Write a JavaScript function to find duplicates in an array.

const findDuplicate = arr => {
    let duplicateArr = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                if(duplicateArr.includes(arr[i])){

                }else{
                    duplicateArr.push(arr[i])
                }
            }
        }
    }
    return duplicateArr
}

console.log(findDuplicate([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, "julu"]));
