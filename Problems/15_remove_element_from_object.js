//Write a method that returns new object without provided properties 

const removeProvidedEle = (obj, e) => {
    let removedObject = obj
    delete removedObject[e]
    return removedObject
}

const obj = {
    name : "sourav", 
    age: 18,
    colege: "creative techno colege"
}


console.log(removeProvidedEle(obj, "colege"))