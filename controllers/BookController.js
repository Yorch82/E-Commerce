const { Book } = require("../models/index");

const BookController = {
    addBook(req, res) {
        Book.create({...req.body })
            .then(book => res.status(201).send({ message: 'Libro añadido exitosamente.', book }))
            .catch(console.error)
    },

}

module.exports = BookController;