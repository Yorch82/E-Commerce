const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');

router.post('/createUser', UserController.create);
router.post('/login', UserController.login);
router.delete('/logout/',authentication, isUser, UserController.logout);
router.get('/UserOrder',authentication, isUser, UserController.loginUserOrder);
router.get('/confirm/:emailToken', UserController.confirm);



module.exports = router;