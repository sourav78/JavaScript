
//Scope

//Global scope

function scopeFunction(){

    //This is fucntion scope

}

{

    // This is block scope
    
}

//Varible Shadowing

function shadowing(){

    let a = "Hello"

    if(true){
        let a  = "Hiiii"  // This a varible shadow the parent varible in this scope
        console.log(a);
    }

    console.log(a);

}

// shadowing()

//Declaration

//This dont give any error
// var a;
// var a;

//This give error -> Identifier 'b' has already been declared
// let b;
// let b;

//This give error -> Missing initializer in const declaration
// const c;
// const c;



//Hoising

// console.log(a); // undifined
// var a = 22

// console.log(b);
// let b = 11

let a = 10;

function getSum(x){

    let b = 50;
    return x+b
}

let c = getSum(a)
console.log(c);
