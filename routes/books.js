const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { authentication, isAdmin } = require('../middleware/authentication');

router.post('/addBooks', authentication, isAdmin, BookController.addBook);
router.get('/getBooks', BookController.getAll);
router.delete('/deleteBook/id/:id', authentication, BookController.delete);
router.get("/id/:id", BookController.getById);
router.get("/search/title/:title", BookController.getByName);
router.get("/search/price/:price", BookController.getByPrice);
router.get('/getBooksOrdered', BookController.getAllOrdered);

module.exports = router;