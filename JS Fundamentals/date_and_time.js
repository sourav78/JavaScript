//Date and time in js

//Date and date methods

// Note --> in js, month start from 0(Jan) to 11(Dec)

const date = new Date()
console.log(typeof date);
console.log(date); //2023-06-03T10:29:04.293Z
console.log(date.toString());  //Sat Jun 03 2023 15:59:04 GMT+0530 (India Standard Time)
console.log(date.toISOString()); //2023-06-03T10:29:04.293Z
console.log(date.toDateString()); //Sat Jun 03 2023
console.log(date.toLocaleDateString()); // 6/3/2023
console.log(date.toJSON()); // 2023-06-03T10:29:04.293Z
console.log(date.toUTCString()); // Sat, 03 Jun 2023 10:29:04 GMT

const myDate = new Date(2013, 11, 24)
console.log(myDate.toDateString()); //Tue Dec 24 2013
console.log(myDate.toDateString().includes("Dec 25"));

//More Date Syntaxes

const dateFormat1 = new Date(2013, 11, 24)
console.log(dateFormat1.toDateString());

//year-month-date hour-minute-sec-mili
// const dateFormat2 = new Date(2023, 06, 04, 04, 15, 06) // 7/4/2023, 4:15:06 AM
// console.log(dateFormat2.toLocaleString()); //it return date with time

const dateFormat3 = new Date("06-12-2012") //format --> month-date-year
console.log(dateFormat3.toDateString()); //Tue Jun 12 2012


// Time in js

// Note --> In js, time starts from jan 01 1970

const timeStamp = Date.now() //it retrun time in milisecond
console.log(timeStamp); //1685789988047

console.log(Date.now());
console.log(Date.now()/1000); //Converting in seconds
console.log(Math.floor(Date.now()/1000)); //We can us Math function to avoid decimal value
 