
//Callback in js

// ex-1

// function show(){
//     console.log("Inside show function");
// }

// function callBackDemo(callback){
//     if(typeof callback == 'function') callback()
// }

// callBackDemo(show)



// ex-2

function show(){
    console.log("Inside show function");
}

setTimeout(() => {
    show()
}, 1000)

//Skiping the ananymous function creation
setTimeout(show, 1000)



//Another way to create a function

const func = new Function("a", "b", "console.log(a+b)")

func(2, 3) // o/p - 5


//HOF

function cbFunction(){
    console.log("This is callback function");
}

function HofFunction(cb){
    console.log("This is Higher Order Function.");
    cb();
}

HofFunction(cbFunction)