const myLibrary = [];

const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#author-name');
const pagesInput = document.querySelector('#pages-number');
const readInput = document.querySelector('#read-check');
const addNewBookBtn = document.querySelector('#add-book');
const removeAllBooksBtn = document.querySelector('#remove-all');
const bookContainer = document.querySelector('#book-information');
const table = document.querySelector('#lib-table');
const tableBody = document.querySelector('#book-body');
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');
const titleErrorMessage = document.querySelector('.title-input .error-message');
const authorErrorMessage = document.querySelector('.author-input .error-message');
const pagesErrorMessage = document.querySelector('.pages-input .error-message');

// Event Listeners
addNewBookBtn.addEventListener('click', addBookToLibrary);
removeAllBooksBtn.addEventListener('click', removeAllBooks);
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
})

/**
 *  Class function that provides book instances.
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
class Book {
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

}
  getInfo() {
    const readStatus = this.read ? 'read' : 'not read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
  }
}

// Testing if the method getInfo() from class Book, works properly as intended.
const testBook1 = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K Rowling', 342, true);
const testBook2 = new Book('Eloquent JavaScript', 'Marijin', 380, false);
console.log(testBook1.getInfo());
console.log(testBook2.getInfo());

function addBookToLibrary() {
  table.append(tableBody);
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.checked;

  if (!validateFormBooks()) {
    return;
  }
  
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
  resetAllInputs();
}

function displayLibrary() {
  tableBody.textContent = '';
  myLibrary.forEach((book, index) => {
    const newRow = document.createElement('tr');
    newRow.classList.add('body-row');

    const titleCell = document.createElement('td');
    titleCell.classList.add('body-cell');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.classList.add('body-cell');
    authorCell.textContent = book.author;

    const pagesCell = document.createElement('td');
    pagesCell.classList.add('body-cell');
    pagesCell.textContent = book.pages;

    const statusCell = document.createElement('td');
    statusCell.classList.add('body-cell');
    const readBtn = document.createElement('button');
    readBtn.classList.add('read-status-btn');

    if (book.read) {
     statusCell.textContent = 'Read ';
     readBtn.style.backgroundColor = 'green';
     readBtn.style.color = 'white';
     readBtn.innerHTML = '✓';
    } else if (!book.read) {
      statusCell.textContent = 'Not read ';
      readBtn.style.backgroundColor = 'red';
    }

    const removeCell = document.createElement('td');
    removeCell.classList.add('body-cell');
    const removeBookBtn = document.createElement('button');
    removeBookBtn.classList.add('remove-book-btn');
    removeBookBtn.innerHTML = '🞬';

    readBtn.addEventListener('click', () => toggleReadStatus(index));
    removeBookBtn.addEventListener('click', () => removeBook(index));

    statusCell.append(readBtn);
    removeCell.append(removeBookBtn);
    newRow.append(titleCell);
    newRow.append(authorCell);
    newRow.append(pagesCell);
    newRow.append(statusCell);
    newRow.append(removeCell);
    tableBody.append(newRow);
  });
}

// Utility Functions
function resetAllInputs() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
  titleErrorMessage.textContent = '';
  authorErrorMessage.textContent = '';
  pagesErrorMessage.textContent = '';
}

function validateFormBooks() {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);
  let isValid = true;

  if (!title) {
    showError(titleErrorMessage, 'Please give a valid title of the book');
    isValid = false;
  }   

  if (!author) {
    showError(authorErrorMessage, 'Please give a valid author');
    isValid = false;
  }

  if (!pages || isNaN(pages) || pages <= 0) {
    showError(pagesErrorMessage, 'Please give a valid number of pages');
    isValid = false;
  }
  return isValid;
}

function removeAllBooks() {
  tableBody.textContent = '';
  myLibrary.length = 0;
  resetAllInputs();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function showError(errorElement, message) {
  errorElement.textContent = message;
}

// Default book instance example
const defaultBook1 = new Book('Chaos', 'James Gleick', 368, false);
const defaultBook2 = new Book('The Fellowship of the Ring', 'J.R.R Tolkien', 423, true);
myLibrary.push(defaultBook1, defaultBook2);
displayLibrary();
