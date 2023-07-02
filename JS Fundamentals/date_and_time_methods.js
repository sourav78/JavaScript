//Date and time methods in js

// getDate() : returns the day for the specified date on the basis of local time.
const myDate1 = new Date()
console.log(myDate1.getDate());

//getDay() : returns the value of day of the week
const myDate2 = new Date()
console.log(myDate2.getDay()); // it return 6 because saturday

//getMonth() : returns the integer value that represents month
const myDate3 = new Date()
console.log(myDate3.getMonth()); // it return 5(june) because january start from 0.

//getFullYear() : returns the year for the specified date
const myDate4 = new Date()
console.log(myDate4.getFullYear());


// getHours() : returns the hour for the specified date
const myDate5 = new Date()
console.log(myDate5.getHours()); //it return 16 because time is 04.15

//getMinutes() : returns the minutes in the specified date
const myDate6 = new Date()
console.log(myDate6.getMinutes()); // it returns 05 because time is 05.15

//getSeconds() : returns the seconds in the specified date on the basis of local time.
const myDate7 = new Date()
console.log(myDate7.getSeconds());

//getMilliseconds() : returns the value of milliseconds in specified date
const myDate8 = new Date()
console.log(myDate8.getMilliseconds());