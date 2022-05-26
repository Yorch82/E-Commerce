const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');


router.post('/createOrder',authentication, isUser, OrderController.create)
router.get('/getAll',authentication, isUser, OrderController.getAll)


module.exports = router;