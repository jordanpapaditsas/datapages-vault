const myLibrary = [
  {
    title: 'Lord of the rings',
    author: 'Tolkien',
    pages: 290,
    read: 'Not read',
  }
];
const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#author-name');
const pagesInput = document.querySelector('#pages-number');
const readInput = document.querySelector('#read-check');
const addNewBookBtn = document.querySelector('#add-book');
const bookContainer = document.querySelector('#book-information');

// Event Listeners
addNewBookBtn.addEventListener('click', addBookToLibrary);

/**
 *  Object Constructor, for making new book instances. 
 * 
 * @param {*} title 
 *              The title of the book.
 * @param {*} author 
 *              The author of the book.
 * @param {*} pages 
 *              The pages of the book.
 * @param {*} read 
 *              The status of the book.
 */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.getInfo = function() {
    const readStatus = this.read ? 'read' : 'not read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
  };
}

function addBookToLibrary() {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayBook();
}

function displayBook() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}



