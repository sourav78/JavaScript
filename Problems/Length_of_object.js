// Write a JavaScript program to get the length of a JavaScript object.

const lengthOfObject = (obj) => {
    let size = 0
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++
        }
    }
    return size
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    mark: "333"
};
// console.log(student.length);
console.log(lengthOfObject(student));