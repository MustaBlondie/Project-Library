const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = uniqueId();
}

function uniqueId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID()) {
    return crypto.randomUUID();
  } else {
    //This is new for me, I just investagate it
    return "id-" + Math.random().toString(36).substr(2, 9);
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

document.getElementById("form-book").addEventListener("submit", function (e) {
  e.preventDefault();
  const titleBook = document.getElementById("title-book").value;
  const authorBook = document.getElementById("author-book").value;
  const pagesBook = document.getElementById("pages-book").value;
  const readBook = document.getElementById("read-book").value;

  if (!titleBook || !authorBook || !pagesBook || !readBook) {
    alert("Please complete all fields");
    return;
  }

  addBookToLibrary(titleBook, authorBook, pagesBook, readBook);
  showTheBooks();
  this.reset();
});

function showTheBooks() {
  const bookCards = document.getElementById("book-cards");
  bookCards.innerHTML = "";

  myLibrary.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2 class="card-title">${element.title}</h2>
        <p class="card-author">${element.author}</p>
        <p class="card-book-pages">${element.pages}</p>
        <p class="card-book-read">${element.read}</p>
    `;

    bookCards.appendChild(card);
  });
}

showTheBooks();
