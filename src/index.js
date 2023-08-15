const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  };
}

function addBookToLibrary() {

}

// const book1 = new Book('Eloquent JavaScript', 'Marijn Haverbeke', '472', 'have not read');

