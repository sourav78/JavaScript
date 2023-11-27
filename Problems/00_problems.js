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