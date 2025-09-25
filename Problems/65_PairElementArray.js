//65. Finding All Pairs of Elements in an Array that Add Up to a Given Sum
// Example:
// Input: array = [1, 2, 3, 4, 5], target = 5
// Output: [(1, 4), (2, 3)]
// Explanation: Pairs that sum up to 5 are (1, 4) and (2, 3).

/**
 * First create 2d array
 * iterate over the provided array 
 * check if any array exist within the array
 * If exist then check if the length of inner array is 1
 *  If match then sum the inner array elemnt with current iterate element 
 *    and compare if it is matching with target
 *    if match then insert the current iterate element into that inner array
 *    if not match then create a new inner array and puch that element
 *  
 */

const FindPairElement = (arr, target) => {
  const pairedArrayList = []

  for (let i of arr) {
    if (pairedArrayList.length <= 0) {
      pairedArrayList.push([i])
      continue
    }

    for (let j of pairedArrayList) {
      if (j.length < 2) {
        if (j[0] + i === target) {
          j.push(i)
        } else {
          pairedArrayList.push([i])
        }
        break
      } else {
        pairedArrayList.push([i])
        break
      }
    }
  }

  console.log(pairedArrayList);
}

FindPairElement([1, 2, 3, 4, 5], 5)