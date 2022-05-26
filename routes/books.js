const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { authentication, isAdmin } = require('../middlewares/authentication');

router.post('/addBooks',authentication, isAdmin,  BookController.addBook);
router.get('/getBooks', BookController.getAll);
router.delete('/deleteBook/id/:id', authentication, isAdmin, BookController.delete);
router.get("/id/:id", BookController.getById);
router.put('/:id', authentication, isAdmin, BookController.update)
router.get("/search/title/:title", BookController.getByName);
router.get("/search/price/:price", BookController.getByPrice);
router.get('/getBooksOrdered', BookController.getAllOrdered);

module.exports = router;