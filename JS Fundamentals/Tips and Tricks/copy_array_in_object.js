

const person = {
    name: "Sourav", 
    age: 19, 
    skills: ["Programming", "Cooking", "Travel"]
}

// const copiedPerson = {...person}
// person.skills.pop()
// person.age = 20
// console.log(copiedPerson);

const personCopy = JSON.parse(JSON.stringify(person))

person.skills.pop()

console.log(personCopy);