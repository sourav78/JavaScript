//de-structuring an array

const myName = ["sourav", "ranjan", "sahoo"]

const [firtName, middleName, lastName] = myName

console.log(firtName);
console.log(middleName);
console.log(lastName);

const [yourName, ...otherName] = myName
console.log(yourName);
console.log(otherName);
console.log(otherName.join(" "));
