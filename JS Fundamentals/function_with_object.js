
// let userCart = {
//     username: "sourav",
//     item: "xxx",
//     price: 333
// }
// let userCart1 = {
//     username: "sourav",
//     item: "qqq",
//     price: 685
// }
// let userCart2 = {
//     username: "sourav",
//     item: "aaa",
//     price: 111
// }

function totalCartPrice (...getObject){
    let totalPrice = 0

    for(let i = 0; i<getObject.length; i++){
        totalPrice += getObject[i].price
    }
    return totalPrice
}

// console.log(totalCartPrice(userCart, userCart1, userCart2));
// totalCartPrice(userCart1, userCart1, userCart2)

//function with array

let userCart = {
    username: "sourav",
    item: "xxx",
    price: 333
}
let userCart1 = {
    username: "sourav",
    item: "qqq",
    price: 685
}
let userCart2 = {
    username: "sourav",
    item: "aaa",
    price: 111
}
let userCart3 = {
    username: "sourav",
    item: "xxx",
    price: 557
}
let userCart4 = {
    username: "sourav",
    item: "xxx",
    price: 449
}

function filterPrice(...usercarts){
    let cartPrices = []
    for(let i  = 0; i<usercarts.length; i++){
        cartPrices[i] = usercarts[i].price
    }
    return cartPrices
}

function totalShopingPrice(arrs){
    let totalPrice = 0
    for(let i of arrs){
        totalPrice = totalPrice+i
    }

    return totalPrice
}
const t = filterPrice(userCart, userCart1, userCart2, userCart3, userCart4)
// console.log(t);
console.log(totalShopingPrice(t))

//function within the object

const borrowMoney = {
    ramesh: 20000,
    harry: 40000,
    dinesh: 15000,
    withIntrest: function(){
        return (this.ramesh+this.harry+this.dinesh)+2000*3
    }
}

console.log("Sum of all money with intrestis",borrowMoney.withIntrest());