//53. Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
//   ]) ➞ 1.5

//   // 1 bottle of milk & 1 box of cereals:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
//   ]) ➞ 4

//   // 3 bottles of milk:
//   getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ]) ➞ 4.5

//   // Several groceries:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) ➞ 10.4

//   // Some cheap candy:
//   getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
//   ]) ➞ 0.3

function getTotalPrice(arr) {

    // let totalPrice = 0

    // arr.map(ele => {
    //     totalPrice += ele.quantity * ele.price
    // })

    let totalPrice = arr.map(ele =>  ele.quantity * ele.price).reduce((acc, curr) => acc + curr).toFixed(1)

    console.log(totalPrice);
}

getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])

getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
])