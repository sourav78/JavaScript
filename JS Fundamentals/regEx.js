// regEx --> Regular Expression
const checkString = "iam the only one, Iam the best , i can do it , iAm dominator"

const pattern = 'iam'

const flag = 'gi'

let regEx1 = new RegExp(pattern, flag)
const result1 = regEx1.test(checkString)
console.log(result1); // It will return boolean value.

// ex:- 2

const regEx2 = /iam/gi
const result2 = checkString.match(regEx2)
console.log(result2); // it will return an array of matched pattern with incase-senstive

const regEx3 = /iam/g
const result3 = checkString.match(regEx3)
console.log(result3);


//replece method

const regEx4 = /iam/gi
const result4 = checkString.replace(regEx4, "I am") //This method match the regEx pattern then replce that
console.log(result4);

const webUrl = "https://www.iamjulu.com/sourav%20ranjan/"
const newUrl = webUrl.replace(/%20/gi, "-")
console.log(newUrl);