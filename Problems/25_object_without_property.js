// Write a method that returns new object without provided properties 

const returnNewObject = (obj, pro) => {
    if(obj.hasOwnProperty(pro)){
        delete obj[pro]
        return obj
    }else return 'property not found'
}

const character = {
    name : "Iron man",
    movie : "End Game",
    age : 52,
    film : 8
}

console.log(returnNewObject(character, "movie"));