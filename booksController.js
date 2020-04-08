//Import the books array in the booksController.js file using `require()`
const books = require('./books.js');

// Display all books and their authors 
const arrayLength=books.length;
for(let i=0; i<arrayLength; i++){
    console.log("Book: " + books[i].title + "\n" + "Author: " + books[i].author + "\n")
}

//Display all the books published by `O'Reilly Media`.
for(let i=0; i<arrayLength; i++)
if(books[i].publisher == "O'Reilly Media"){
    console.log("Book: " + books[i].title + "\n")
}

// Display all the books which have more than 350 pages
for(let i=0; i<arrayLength; i++)
if(books[i].pages > 350){
    console.log("Book: " + books[i].title + "\n")
}