const express = require('express');
const { auth } = require('../middleware/auth');
const {
  getCart, addToCart, removeFromCart
} = require('../controllers/cartController');

const router = express.Router();

router.get('/', auth, getCart);
router.post('/', auth, addToCart);
router.delete('/:productId', auth, removeFromCart);

module.exports = router;
