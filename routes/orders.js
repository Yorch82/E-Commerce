const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')

router.post('/createOrder', OrderController.create)
router.get('/getAll', OrderController.getAll)


module.exports = router;