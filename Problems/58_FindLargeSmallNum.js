//58. Finding the Largest and Smallest Numbers in an Array
// Example:
// Input: array = [4, 7, 1, 8, 5]
// Output: Largest: 8, Smallest: 1

const FindingMachine = (arr) => {
  smallNumber = arr[0];
  bigNumber = arr[0];

  arr.forEach(num => {
    if(num <= smallNumber) smallNumber = num;

    if(num >= bigNumber) bigNumber = num;
  });

  console.log({smallNumber, bigNumber});
}

const arr1 = [3, 8, 12, 19, 25]
const arr2 = [7, 14, 21, 28, 35]
const arr3 = [1,0]
const arr4 = [-2, -4, -6, -8, -10]
const arr5 = [11, 22, 33, 44, 55]

FindingMachine(arr1)
FindingMachine(arr2)
FindingMachine(arr3)
FindingMachine(arr4)
FindingMachine(arr5)