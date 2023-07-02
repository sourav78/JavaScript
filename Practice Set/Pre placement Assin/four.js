function increaseOne(arr){
    const popu = arr.pop()
    arr.push(popu+1)
    return arr
}

console.log(increaseOne([1, 2, 3]))