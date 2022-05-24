const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const {authentication, isAdmin} = require('../middleware/authentication')

router.post('/createUser', UserController.create);
router.post('/login', UserController.login);


module.exports = router;