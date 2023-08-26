
const powerNum = (num) => {
    return num ** 2
}

function cubeNum(powerNum, num){
    return powerNum(num) * 3
}

let cubevalue = cubeNum(powerNum, 3)
// console.log(cubevalue);


//return a function

function sayHello(){
    return () => {
        console.log("Hello coders");
    }
}

let sayValue = sayHello()

// console.log(sayValue); // This will return a function so we need to call the function
// sayValue()  // Output:- Hello coders

// ex:- 2

function reminder(){
    return (number, devider) => {
        return number % devider
    }
}

let result = reminder()
// console.log(result(9, 2));


//function inside a function

function parentFun(a){
    function secFun(b){
        function threeFun(c){
            return a + b + c
        }
        return threeFun
    }
    return secFun
}

let allValue = parentFun(2)(4)(6)
console.log(allValue);