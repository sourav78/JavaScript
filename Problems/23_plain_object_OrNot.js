//Write a method that verifies an argument is a plain object, not an array or null

const verifyPlainObject = (obj) => {
    if(typeof obj === 'object'){
        if(Array.isArray(obj)){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}

const obj = [1, 2, 3]
const user = {
    name : "sourav", 
    age: 18
}
console.log(verifyPlainObject(user));