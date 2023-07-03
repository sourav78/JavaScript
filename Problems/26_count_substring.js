// Write a function to count the occurrences of a substring in a string

const countSubstring = (string, substr) => {
    return string.split(substr).length - 1
}

console.log(countSubstring("i am julu am sourav", "am"));

const occurance = (str, substr) => {
    str += ""
    substr += ""
    if(substr.length <= 1) return str.length + 1

    let count = 0 
    let position = 0

    while(true){
        position = str.indexOf(substr, position)
        if(position >= 0){
            count ++
            position += substr.length
        }else break
    }

    return count
}

console.log(occurance("i am julu am sourav", "am"));