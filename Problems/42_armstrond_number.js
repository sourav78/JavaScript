//To find Armstrong Number between two given number.

const findArmstrongNumber = (start, end) => {
    let armstrongNumbers = []
    for(let i = start; i <= end; i++){
        let temp = i
        let sum = 0
        while(temp > 0){
            let r = temp % 10
            sum += (r*r*r)
            temp = parseInt(temp / 10)
        }
        if(sum === i){
            armstrongNumbers.push(i)
        }
    }
}

// const checkArmstrong = num => {
//     let r, temp
//     let sum = 0
//     temp = num
//     while(num > 0){
//         r = num % 10
//         sum = sum + (r*r*r)
//         num = parseInt(num / 10)
//     }

//     if(temp == sum){
//         console.log("armstrong");
//     }
// }

console.log(findArmstrongNumber(100, 200));
// checkArmstrong(154)