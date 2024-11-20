const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
];

const books = [
    { id: 1, title: "LOTR" },
    { id: 2, title: "Life of Brian" },
    { id: 3, title: "Shogun" },
];


async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};


async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
};

module.exports = { getAuthorById, getBookById };
