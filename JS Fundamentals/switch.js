const prompt = require('prompt-sync')();

// switch case in java script

// let a = "moring"

// switch(a){
//   case "morning":
//     alert("Good Morning to all")
//     break;
//   case "night":
//     alert("Good Night")
//   default:
//     alert("Invalid greet")
// }

//wap to print days of weak from numbers

let x = prompt("Enter number (1-7) : ")
x = Number.parseInt(x);
switch(x){
  case 1:
    alert("Monday")
    break;
  case 2:
    alert("Tuseday")
    break;
  case 3:
    alert("Wednesday")
    break;
  case 4:
    alert("Thursday")
    break;
  case 5:
    alert("Friday")
    break;
  case 6:
    alert("Saturday")
    break;
  case 7:
    alert("Sunday")
    break;
  default:
    alert("Invalid Number")
}