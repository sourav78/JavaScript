
//find

const tips = [100, 300, 200, 350, 220]

let afterBig = tips.find(ele => {
    return ele > 200
})

console.log(afterBig);


//findIndex

let finInd = tips.findIndex(ele => {
    return ele > 200
})
console.log(finInd);

let finInd2 = tips.findIndex(ele => {
    return ele == 350
})
console.log(finInd2);