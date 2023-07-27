//remone duplicate value from array


const arr = [1, 2, 4, 6, 4] 

//1st approach

const uniqueArr = [...new Set(arr)]
console.log((uniqueArr));

// ex:- 2

const grosary = ["Soap", "Oil", "Maggie", "Juice", "Oil", "Sugar", "Juice"]
const mainGrosary = [...new Set(grosary)]
console.log(mainGrosary);