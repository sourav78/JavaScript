//Nested function 

function addTwoNumber(num1, num2){
    let sum = num1+num2
    function oneTypeOfTheorem(sum){
        console.log("The theorem is :"+(sum+num1));
    }

    oneTypeOfTheorem(sum)
}

addTwoNumber(12, 11)

//Example - 1
//calculate triangle Hypotenuse

function triangleHypotenuse(base, height){
    function calculateSquare(side){
        return side*side
    }

    return Math.sqrt(calculateSquare(base)+calculateSquare(height))
}

console.log(triangleHypotenuse(12, 7));


// Function calling inside the function but define outside of the function

function displayAge(age){
    console.log(`Your age is: ${age}`);
}

function getDetails(name, age){
    console.log(`Your name is ${name}`);
    displayAge(age)
}

getDetails("Sourav", 19)
