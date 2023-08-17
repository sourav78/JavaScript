// // Array Methods

// let arr = [12, 1, 32, 43, "sourav", true, 43, 56, "julu"]
// let temp = [11, 12, 13, 14, 15, 16]

// //toString: Returns a string representing the specified array and its elements.
// console.log("toString")
// let a = arr.toString(); // Now a is a string
// console.log(a, typeof a) 

// //join: Joins all elements of an array into a string using a separator
// console.log("join")
// let b = arr.join("*"); // like (-, _, +, =, ., string, char etc)
// console.log(b, typeof b) //It returns a string

// //push: Adds one or more elements to the end of an array and returns the new length.
// console.log("push")
// let c = arr.push(1111) // c return the new array length
// console.log(arr)
// console.log(c)

// //pop: Removes the last element from an array and returns that element.
// console.log("pop")
// let d = arr.pop();// d returns the poped element
// console.log(arr)
// console.log(d)

// //shift: Removes the first element from an array and returns that element.
// console.log("shift")
// let e = arr.shift() //It return the removed element 
// console.log(arr)
// console.log(e)

// //unshift: Adds one or more elements to the beginning of an array and returns the new length.
// console.log("unshift")
// let f = arr.unshift(11) //it return the new array length
// console.log(arr)
// console.log(f)

// //delete : It delete the specified index nmbers elements and it dont affect the row.
// console.log("delete");
// delete temp[1]
// console.log(temp);
// console.log(temp.length);

// // concat: Combines two or more arrays and returns a new array.
// console.log("concat");
// let g = arr.concat(temp, ['aa', 'ss', 'dd'])
// console.log(g);

// //sort: Sorts the elements of an array in place according to the provided sorting function(it change the main array)
// console.log("sort");
// let h = [12, 43, 56, 24, 209]
// h.sort();
// console.log(h);
// //sorting in accending order
// let accending = (a, b) => {
//     return a-b;
// }
// h.sort(accending);
// console.log(h);
// //sorting an array in deccending order
// let deccending = (a,b) => {
//     return b-a;
// }
// h.sort(deccending);
// console.log(h)

// //reverse: Reverses the order of the elements in an array in place.(it change the main array)
// console.log("reverse");
// temp.reverse();
// console.log(temp);

// //splice: Changes the contents of an array by removing or replacing existing elements.(it change the main array)
// //syntax :- array.splice(start, how many elements delete, num1, num2, num3, ...)
console.log("splice");
let qq = [11, 22, 33, 44, 55, 66, 77, 88]
let deleteValues = qq.splice(3, 3, 1001, 1002, 1003, 1004)
console.log(qq);
console.log(deleteValues);

// //slice: Returns a shallow copy of a portion of an array into a new array.
// //syntax :- 1. array.slice(2) //it create a new array from index number 2 to last
// //          2. array.slice(start, end) //it create a new array from start index to end-1 index
// console.log("slice");
// let i = arr.slice(5);
// console.log(i);
// let j = arr.slice(2, 6);
// console.log(j);