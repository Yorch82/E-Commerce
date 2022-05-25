const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const {authentication, isAdmin} = require('../middlewares/authentication')

router.post('/createUser', UserController.create);
router.post('/login', UserController.login);
router.delete('/logout',authentication, UserController.logout);


module.exports = router;