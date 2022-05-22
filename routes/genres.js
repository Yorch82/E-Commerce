const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/GenreController')

router.post('/addGenre', GenreController.addGenre);
router.get('/getGenreById/:id', GenreController.genreById);
router.get('/getGenreByName/:name', GenreController.genreByName);



module.exports = router;