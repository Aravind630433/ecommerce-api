const express = require('express');
const { auth } = require('../middleware/auth');
const { createOrder, getOrders } = require('../controllers/orderController');

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, getOrders);

module.exports = router;
