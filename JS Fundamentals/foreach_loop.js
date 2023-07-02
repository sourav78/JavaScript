
// //forEach loop
const arr = [11, 22, 33, 44, 55, 66, 77]

arr.forEach( (item) => {
    console.log(item);
} )

arr.forEach( (item, index, array) => {
    console.log(`${index} : ${item}`);
    // console.log(array);
} )

const values = arr.forEach( (items) => {
    return items
})
console.log(values); // It return undefined object because forEach loop doesn't return any value

//More Example
function multiplyTen(num){
    console.log(num*10);
}
arr.forEach(multiplyTen)

function EvenItems(item){
    if (item%2==0) {
        console.log(item);
    }
}
arr.forEach(EvenItems)

let newArray = []
arr.forEach( (num) => {
    if(num > 40){
        newArray.push(num)
    }
} )
console.log(newArray);