
// function createUser(product, price){
//     this.product = product
//     this.price = price
// }

// //define function in the function using prototype

// createUser.prototype.increment = function(){
//     this.price++
// }

// createUser.prototype.printMe = function(){
//     console.log(`Product: ${this.product}`);
//     console.log(`Price is: ${this.price}`);
// }

// const user1 = new createUser("Mobile", 12000)

// user1.increment()
// user1.printMe()


//-----------------------------------------------------------------------------------------------


// const myHeros = ["Thor", "Hulk", "Antman"]

// const heros = {
    //     thor: "Hammer",
    //     spiderman: "Web shooter"
    // }
    
    // Object.prototype.syaName = function(){
        //     return `My name is xxx`
        // }
        
        // console.log(heros.syaName())
        
        // console.log(myHeros.syaName());
        
        
//-----------------------------------------------------------------------------------------------

//create a method trueLength that return length of the string afetr removing whitespaces

String.prototype.trueLength = function(){
    // console.log(this);
    return this.trim().length
}

const myName = "sourav       "

console.log(myName.length);
console.log(myName.trueLength());