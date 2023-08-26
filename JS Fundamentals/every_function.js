
const tips = [100, 300, 200, 350, 220]
const tips2 = [100, 300, 200, "800", 350, 220]

//find all the values are numbers
// console.log(typeof tips[1]);
let checktips = tips.every(ele => {
    return typeof ele === 'number'
})

let checktips2 = tips2.every(ele => {
    return typeof ele === 'number'
})

// console.log(checktips);
// console.log(checktips2);

// ex:- 2

// Example 1
const book1 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    pages: 310,
    publisher: "Allen & Unwin"
  };
  
  // Example 2
  const book2 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic Fiction",
    pages: 432,
    publisher: "T. Egerton"
  };
  
  // Example 3
  const book3 = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    publisher: "Bloomsbury"
  };
  
  // Example 4
  const book4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Classic Fiction",
    publisher: "J.B. Lippincott & Co."
  };
  
  // Example 5
  const book5 = {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery",
    pages: 454,
    publisher: "Doubleday"
  };

  
let books = [book1, book2, book3, book4, book5]

function booksInfo(book){
    return Object.hasOwn(book, "pages")
}

let checkBook = books.every(booksInfo)

console.log(checkBook);