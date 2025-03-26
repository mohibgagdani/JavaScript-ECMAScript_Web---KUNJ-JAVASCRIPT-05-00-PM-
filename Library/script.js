document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const image = document.getElementById('image').value;

    const bookList = document.getElementById('book-list');
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>by ${author}</p>
        <p>(${year})</p>
        <button class="delete" onclick="deleteBook(this)">Delete</button>
    `;
    bookList.appendChild(bookItem);

    document.getElementById('book-form').reset();
}

function deleteBook(button) {
    const bookItem = button.parentElement;
    bookItem.remove();
}