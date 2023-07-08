//In first class function we treate a function as value
function dance(danceType){
    danceType()
}

dance(function (){
    console.log("Hip-pop");
})

//ex-1

const sayHello = () => {
    return "Hello "
}

const greeting = (mode, name) => {
    console.log(mode() + name);
}

greeting(sayHello, "Sourav")

// ex-2 ===> calculate Avarage

const sum = (x, y) => {
    return x+y
}

const sum10 = (x, y) => {
    return x + y + 10
}

const avg = (a, b, fun) => {
    return fun(a, b) / 2
}

console.log(avg(12, 20, sum));
console.log(avg(14, 10, sum10));