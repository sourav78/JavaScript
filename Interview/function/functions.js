
// const sum = function (num1, num2){
// 	return num1 + num2
// }

// function displaySum(fn, num1, num2){
//     console.log("Sum is : ", fn(num1, num2));
// }

// displaySum(sum, 5, 6)



//IIFE -> Imediatly Invoked Function Expression

// (function square(num){
//     console.log(num*num);
// })(3)


//Arrow function

// const mul = (num1, num2) => {
//     console.log(num1 * num2)
// }

// mul(2, 3)

let name = "julu"

const obj = {
    name: 'Sourav',
    greet: () => {

        let name = "Hello"

        const kk = () => {
            console.log(this.name)
        }

        kk()
    }
};
obj.greet();