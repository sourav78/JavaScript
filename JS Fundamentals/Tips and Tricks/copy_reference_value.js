//Copy reference value

let arr = [1, 2, 3, 4, 5]
let copyArr = arr
copyArr.push(11)
// console.log(copyArr);
// console.log(arr);

//In the above example we can not copy the value of the variable accually we just assign the referenece to other value.For that if we change in the copied value it also change in main value;

//For copy the reference value !

let nums = [11, 22, 33, 44, 55, 66, 77]
let copiedNums = [...nums]

copiedNums.push(99)

console.log(nums);
console.log(copiedNums);

//Same for the object

let users = {
    name: "sourav",
    age: 19,
    course: "Web Development"
}

let copiedUser = {...users}

copiedUser.graduate = true

console.log(users);
console.log(copiedUser);