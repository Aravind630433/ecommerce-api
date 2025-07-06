const express = require('express');
const { auth, admin } = require('../middleware/auth');
const {
  getProducts, addProduct, updateProduct, deleteProduct
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.post('/', auth, admin, addProduct);
router.put('/:id', auth, admin, updateProduct);
router.delete('/:id', auth, admin, deleteProduct);

module.exports = router;
