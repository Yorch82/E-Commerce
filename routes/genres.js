const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/GenreController')
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');


router.post('/addGenre', authentication, isManager, GenreController.addGenre);
router.get('/getGenreById/:id',authentication, isUser, GenreController.genreById);
router.get('/getGenreByName/:name',authentication, isUser, GenreController.genreByName);
router.get('/getGenre',authentication, isUser, GenreController.getGenreWithBooks); //Endpoint de generos con sus libros
router.get('/getAll',authentication, isUser, GenreController.getAll); //Endpoint que trae todos los generos
router.delete('/deleteGenre/:id',authentication, isManager, GenreController.delete); //Eliminar un genero





module.exports = router;