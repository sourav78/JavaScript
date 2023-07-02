let arr = [34, 23, 67, 45, null, false, "Not Present"]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7]) //This will print undefined

console.log("Length Of Array : "+arr.length) //This will print length of array

arr[7] = 55 //Add a new value to an array
arr[1] = 33 // Change the value of an array
console.log(arr) 
console.log(typeof arr) 

//Array Traversing

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}