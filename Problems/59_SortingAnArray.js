//59. Sorting an Array
// Example:
// Input: array = [3, 1, 4, 1, 5, 9]
// Output: [1, 1, 3, 4, 5, 9]

const Sorter = (arr) => {

  for(let i = arr.length; i >= 1; i--){
    for(let j = 0; j <= i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  console.log(arr);
}

Sorter([3, 1, 4, 1, 5, 9])
Sorter([3, 1])
Sorter([3, 1, 0, 0, 0, 0])