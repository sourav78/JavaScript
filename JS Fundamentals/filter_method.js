// filter function in js

const numbers = [12, 43, 22, 11, 09, 03, 66, 14]

//Explicit
const greater = numbers.filter( (num) => {
    return num > 15
})
console.log(greater);

//Implicit
const smaller = numbers.filter( (num) => (num < 20))
console.log(smaller);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//give me the book who's genre is history
const user = books.filter( (book) => (book.genre === "History") )
console.log(user);

//give me the book that was publish after 2000
const publish = books.filter( (book) => (book.publish > 2000))
console.log(publish);

//give me the book that was publish after 2000 and a science book
const userBook = books.filter( (book) => {
    return book.publish >= 1995 && book.genre === 'Science'
})
console.log(userBook);