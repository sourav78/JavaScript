//Write a JavaScript function to check if a string contains a certain word.

const checkWord = (str, w) => {
    for(let julu = 0; julu < str.length; julu++){
        if(str[julu] === w) return true
    }
    return false
}

const findWord = (str, w) => str.includes(w)

console.log(checkWord("sourav", 'v'));
console.log(findWord("Java Script", 'w'));