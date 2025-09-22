//60. Checking for Armstrong Numbers in a Range
// Example:
// Input: range = [1, 500]
// Output: [1, 153, 370, 371, 407]

const CheckArmstrong = (num) => {
  const tempNumber = num
  let armstrongResult = 0;

  while(num >= 1){
    let lastDigit = num % 10;
    armstrongResult += (lastDigit*lastDigit*lastDigit);
    num = Math.floor(num/10); 
  }

  return tempNumber === armstrongResult;
}

const CheckArmstrongInRange = (rangeStart, rangeEnd) => {

  const armstrongNumberInRange = []

  for(let range = rangeStart; range <= rangeEnd; range++){
    if(CheckArmstrong(range)) armstrongNumberInRange.push(range)
  }

  console.log(armstrongNumberInRange);
}

CheckArmstrongInRange(1, 500)
CheckArmstrongInRange(334, 56673)
CheckArmstrongInRange(1, 234)