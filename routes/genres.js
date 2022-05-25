const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/GenreController')

router.post('/addGenre', GenreController.addGenre);
router.get('/getGenreById/:id', GenreController.genreById);
router.get('/getGenreByName/:name', GenreController.genreByName);
router.get('/getGenre', GenreController.getGenreWithBooks); //Endpoint de generos con sus libros
router.get('/getAll', GenreController.getAll); //Endpoint que trae todos los generos
router.delete('/deleteGenre/:id', GenreController.delete); //Eliminar un genero





module.exports = router;