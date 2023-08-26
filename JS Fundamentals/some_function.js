
const nums = [12, 14, 22, 30, 21]

let checkSome = nums.some((ele) => {
    return ele % 2 !== 0
})

console.log(checkSome); // It will return true

// ex-2

function lesSal(amt){
    return amt < 10000
}

function bigSal(amt){
    return amt > 90000
}

const salary = [1200, 30000, 80000, 55000, 35000]

let lessSalary = salary.some(lesSal)
let bigSalary = salary.some(bigSal)

console.log(lessSalary);
console.log(bigSalary);