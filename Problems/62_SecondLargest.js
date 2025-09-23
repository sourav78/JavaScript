//62. Finding the Second Largest Number in an Array
// Example:
// Input: array = [10, 20, 4, 45, 99]
// Output: 45
// Explanation: The second largest number in the array is 45.

const FindSecondLargest = (arr) => {
  large = arr[0]
  secLarge = 0

  if(arr.length <= 1){
    console.log(0);
    return
  }


  for(let i = 0; i < arr.length; i++){
    if(arr[i] > large){
      secLarge = large
      large = arr[i]
    }else{
      if(arr[i] > secLarge){
        secLarge = arr[i]
      }
    }
  }

  console.log(secLarge);
}

FindSecondLargest([3, 2, 5, 3, 2, 6, 75])
FindSecondLargest([3, 2])
FindSecondLargest([3])
FindSecondLargest([3, 838, 839, 527, 952, 317, 723])