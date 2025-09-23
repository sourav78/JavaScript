//61. Finding the Sum of Prime Factors of a Number
// Example:
// Input: number = 12
// Output: 5
// Explanation: The prime factors of 12 are 2 and 3, and their sum is 2 + 3 = 5.

// Check Prime

const CheckPrime = (inpNum) => {
  factorCount = 0;

  for (let i = 1; i <= inpNum; i++) {
    for (let j = 1; j <= inpNum; j++) {

      if (factorCount > 2) return false
      if (i * j === inpNum) factorCount += 1

    }
  }

  return true
}

const GetSumOfPrimeFactor = (factorNumber) => {
  const numArr = []

  if (CheckPrime(factorNumber)) {
    console.log(factorNumber);
  }

  while (factorNumber > 1) {
    if (factorNumber % 2 === 0) {
      if (!numArr.includes(2)) numArr.push(2)
      factorNumber /= 2
    } else {

      for (let i = 3; i <= factorNumber; i = i+2) {
        if(CheckPrime(factorNumber/i)){
          if (!numArr.includes(i)) numArr.push(i)
          if (!numArr.includes(Math.floor(factorNumber/i))) numArr.push(Math.floor(factorNumber/i))
            factorNumber = Math.floor(factorNumber/i)
          break;
        }else{
          factorNumber = Math.floor(factorNumber/i)
          if (!numArr.includes(i)) numArr.push(i)
        }
      }

    }
  }

  console.log(numArr);
  
}

console.log(GetSumOfPrimeFactor(3));
console.log(GetSumOfPrimeFactor(13));
console.log(GetSumOfPrimeFactor(15));
console.log(GetSumOfPrimeFactor(2));
console.log(GetSumOfPrimeFactor(9));
