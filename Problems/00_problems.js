//01. Reverse an array~

//02. Create a function that will merge two arrays and return the result as a new array~

//03. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both~

//04. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second~

//05. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.~

//06. Create a function that will capitalize the first letter of each word in a text~

//07. Calculate the sum of numbers received in a comma delimited string~

//08. Create a function that will convert a string in an array containing the ASCII codes of each character~

//09. Remove the spaces found in a string~

//10. Return a Boolean if a number is divisible by 10

//11. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.~
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// (8+10)-1

//12. Write a function that converts hours into seconds.

//13. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// animals(2, 3, 5) ➞ 36

//14.Create a function which returns the number of true values there are in an array.

//15.Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.~
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
// output:-
// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

//16.Square the value of every element in the array. Presume that you will only get numbers in the input array.~

//17.If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.~

//18.The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.~
// const input = "George Raymond Richard Martin";
// output:- "GRRM"

//19.Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.~
// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
//   ];
//output:- [13, 67, 54];

//20.Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e.
// const input = "Every developer likes to mix kubernetes and javascript"
//output:- "E3y d7r l3s to mix k8s and j8t";

//21.If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

//22.Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//   ];
//output:- {a: 1,b: 1,c: 2,d: 2,f: 2,g: 1,}

//23. Write a method that verifies an argument is a plain object, not an array or null
// ({ a: 1 }) => true, 
// ([1, 2, 3]) => false

//24.Write a method that returns a deep array like [[key, value]]
//({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

//25.Write a method that returns new object without provided properties 
//({ a: 1, b: 2 }, 'b') => { a: 1 } 

//26.Write a function to count the occurrences of a substring in a string

//27.House Robber  leetcode --> https://leetcode.com/problems/house-robber/
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

//28.Write a JavaScript function to check whether an input is a string or not.

//29.Write a JavaScript function to reverse a string.

//30.Write a JavaScript function to reverse a string by word.

//31.Angle Between Hands of a Clock

//32.The kth Factor of n
// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

//33.Write a JavaScript function to find the longest word within a string.

//34.Write a JavaScript function to check if a string contains a certain word.

//35.Write a JavaScript function to check whether an input is an array or not.

//36.Write a JavaScript function to get the first 'n' elements of an array.

//37.Write a JavaScript function to find the most frequent item of an array.

//38.Write a JavaScript function to remove a specific element from an array.

//39.Write a JavaScript function to find duplicates in an array.

//40.Write a function to flatten an array. For example, [1, 2, [3, 4, [5, 6]]] should become [1, 2, 3, 4, 5, 6].

//41.Write a function that will return an array of all prime numbers in a given range

//42.Write a function To find Armstrong Number between two given number.

//43. Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

//44. Write a function in java script to calculate the age of a person

//45. According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//    compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

//46. Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
// oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

//47. Write a function that takes the base and height of a triangle and return its area.
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50

//48. Create a function that takes an array containing only numbers and return the first element.
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

//49. Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]

// 50. Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.
// const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// valueInTree(arr1, 5) ➞ true
// valueInTree(arr1, 9) ➞ false
// valueInTree(arr2, 51) ➞ false

//51. Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
// combinations(2, 3) ➞ 6
// combinations(3, 7, 4) ➞ 84
// combinations(2, 3, 4, 5) ➞ 120

//52. An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
// isPositiveDominant([5, 0]) ➞ true
// isPositiveDominant([0, -4, -1]) ➞ false


//53. Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
//   ]) ➞ 1.5
  
//   // 1 bottle of milk & 1 box of cereals:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
//   ]) ➞ 4
  
//   // 3 bottles of milk:
//   getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ]) ➞ 4.5
  
//   // Several groceries:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) ➞ 10.4
  
//   // Some cheap candy:
//   getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
//   ]) ➞ 0.3

//54. The left shift operation is similar to multiplication by powers of two.
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128

// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128

//55. Create a function that calculates the number of different squares in an n * n square grid.
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55

// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

//56. If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.
//    Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.
// aveSpd(18, 20, 60) ➞ 30
// aveSpd(30, 10, 30) ➞ 15
// aveSpd(30, 8, 24) ➞ 12

//57. Counting Vowels and Consonants in a String
// Example:
// Input: string = "hello world"
// Output: Vowels: 3, Consonants: 7

//58. Finding the Largest and Smallest Numbers in an Array
// Example:
// Input: array = [4, 7, 1, 8, 5]
// Output: Largest: 8, Smallest: 1

//59. Sorting an Array
// Example:
// Input: array = [3, 1, 4, 1, 5, 9]
// Output: [1, 1, 3, 4, 5, 9]

//60. Checking for Armstrong Numbers in a Range
// Example:
// Input: range = [1, 500]
// Output: [1, 153, 370, 371, 407]

//61. Finding the Sum of Prime Factors of a Number
// Example:
// Input: number = 12
// Output: 5
// Explanation: The prime factors of 12 are 2 and 3, and their sum is 2 + 3 = 5.

//62. Finding the Second Largest Number in an Array
// Example:
// Input: array = [10, 20, 4, 45, 99]
// Output: 45
// Explanation: The second largest number in the array is 45.

//63. Finding the Longest Substring Without Repeating Characters
// Example:
// Input: string = "abcabcbb"
// Output: "abc"
// Explanation: The longest substring without repeating characters is "abc".

//64. Counting the Number of Palindromic Substrings in a String
// Example:
// Input: string = "aaa"
// Output: 6
// Explanation: Palindromic substrings are "a", "a", "a", "aa", "aa", "aaa".

//65. Finding All Pairs of Elements in an Array that Add Up to a Given Sum
// Example:
// Input: array = [1, 2, 3, 4, 5], target = 5
// Output: [(1, 4), (2, 3)]
// Explanation: Pairs that sum up to 5 are (1, 4) and (2, 3).