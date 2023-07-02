//wap to filter number from an array who are divisible by 10

let arr = [12, 40, 22, 10, 90, 60, 75]

let filterTen = arr.filter((ele)=>{
    return ele%10==0
})

console.log(filterTen);