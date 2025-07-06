const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0)
    return res.status(400).json({ msg: 'Cart is empty' });

  const order = await Order.create({ userId: req.user.id, items: cart.items });
  await Cart.findOneAndDelete({ userId: req.user.id });

  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
