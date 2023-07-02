//Reduce method in js

const arr = [10, 20, 30, 40, 50]

const total = arr.reduce( (acc, curr) => {
    return acc+curr
}, 0)
console.log(total);

//ex-1

const courses = [
    {
        course: "JS Course",
        price: 2999
    },
    {
        course: "Python Course",
        price: 999
    },
    {
        course: "Data Science Course",
        price: 12999
    },
    {
        course: "Android Course",
        price: 5000
    },
    {
        course: "Java Course",
        price: 2499
    }
]

const totalPrice = courses.reduce( (acc, curr) => acc + curr.price, 0)
console.log(totalPrice);