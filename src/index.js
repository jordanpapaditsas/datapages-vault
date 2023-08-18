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

// Event Listeners
addNewBookBtn.addEventListener('click', addBookToLibrary);
removeAllBooksBtn.addEventListener('click', removeAllBooks);

/**
 *  Constructor function that provides book instances.
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
  table.append(tableBody);
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.checked;

  if (title === '' || author === '' || pages === '') {
    return false;
  }

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
}

function removeAllBooks() {
  tableBody.textContent = '';
  myLibrary.length = 0;

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
}

function displayLibrary() {
  tableBody.textContent = '';

  myLibrary.forEach(book => {
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

    const readCell = document.createElement('td');
    readCell.classList.add('body-cell');
    readCell.textContent = book.read ? 'read' : 'not read';

    newRow.append(titleCell);
    newRow.append(authorCell);
    newRow.append(pagesCell);
    newRow.append(readCell);

    tableBody.append(newRow);
  });
}




