// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// (8+10)-1

const prompt = require('prompt-sync')();

const findEdge = (eg1, eg2) => {
    eg1 = Number.parseInt(eg1)
    eg2 = Number.parseInt(eg2)

    let thirdEdge = (eg1+eg2)-1

    return thirdEdge
}

let edge1 = prompt("Enter first Edge : ")
let edge2 = prompt("Enter second Edge : ")

let thirdEdge = findEdge(edge1, edge2);
console.log(thirdEdge);