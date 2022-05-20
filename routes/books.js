const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')

router.post('/addBooks', BookController.addBook)

module.exports = router;