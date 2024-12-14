// Curring in JS

// In currying a a normal function which takes multiple arguments transformed into series of function where each function takes one argument at once and return a new function that takes next argument. The final function is return the result.

function curry(num1){
  return function(num2){
    return num1 + num2
  }
}

console.log(curry(5)(9));


//Questions

//q.1 -> sum(3)(4)(6)

function sum(num1){
  return function(num2){
    return function(num3){
      return num1 + num2 + num3
    }
  }
}

console.log(sum(3)(4)(5));

// q.2 -> 
//  evaluate("sum")(4)(2) => 6
//  evaluate("sub")(4)(2) => 2
//  evaluate("mul")(4)(2) => 8
//  evaluate("div")(4)(2) => 2

function evaluate(operation){
  return function(num1){
    return function(num2){
      switch (operation) {
        case "sum":
          return num1 + num2
        case "sub":
          return num1 - num2
        case "mul":
          return num1 * num2
        case "div":
          return num1 / num2
      
        default:
          return "Invalid"
      }
    }
  }
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("sub")(4)(2));
console.log(evaluate("mul")(4)(2));
console.log(evaluate("div")(4)(2));


// q.3 -> Infinte Currying -> add(1)(2)...(n)

function add(num1){
  return function(num2){
    if(num2) return add(num1+num2);
    return num1;
  }
}

console.log(add(2)());
console.log(add(2)(2)(5)(7)(9)());


// q.4 -> Currying VS Partia Application

// Currying
function sum2(num1){
  return function(num2){
    return function(num3){
      return num1 + num2 + num3
    }
  }
}

console.log(sum2(3)(4)(5));

// Partial Application
function sum3(num1){
  return function(num2, num3){
    return num1 + num2 + num3
  }
}
console.log(sum3(3)(6, 7));


// q.5 -> Manipulating DOM

function updateDomElement(id){
  return function(content){
    document.querySelector(`#${id}`).textContent = content
  }
}

const greet = updateDomElement("greet")
greet("Yoo i am julu")

// q.6 -> COnvert a normal function to a curried function

function curry(func){
  return function curriedFunc (...args){
    
    if(args.length >= func.length){
      return func(...args)
    }else{
      return function(...next){
        return curriedFunc(...args, ...next)
      }
    }
  }
}

const sum4 = (a, b, c, d) => a+b+c+d

const curriedSum = curry(sum4)

console.log(curriedSum(3)(4)(6)(9));
