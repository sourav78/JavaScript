//Write a JavaScript function to find the longest word within a string.

const findLongestWord = str => {
    let strArr = str.split(" ")
    strArr = strArr.sort()
    let max = 0
    let ind
    for(let i in strArr){
        if(strArr[i].length > max){
            max = strArr[i].length
            ind = strArr[i]
        }
    }
    return ind
}

console.log(findLongestWord("Can you give me something food"));
console.log(findLongestWord("give me acknowledgement"));
console.log(findLongestWord("Cow is a animal"));
console.log(findLongestWord("apply apple on the table"));


