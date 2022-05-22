const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')

router.post('/addBooks', BookController.addBook);
router.get('/getBooks', BookController.getAll);
router.delete('/deleteBook/id/:id', BookController.delete);
router.get("/id/:id", BookController.getById);

module.exports = router;