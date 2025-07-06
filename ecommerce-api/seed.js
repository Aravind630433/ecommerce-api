const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const products = [
    { name: "Bluetooth Headphones", price: 1499, category: "Electronics", description: "Wireless Bluetooth headphones with 12h battery life" },
    { name: "Running Shoes", price: 2999, category: "Footwear", description: "Lightweight running shoes for men" },
    { name: "Smart Watch", price: 3999, category: "Wearables", description: "Fitness smartwatch with heart rate monitor" },
    { name: "Backpack", price: 1099, category: "Accessories", description: "Water-resistant laptop backpack with USB charging port" },
    { name: "LED Desk Lamp", price: 799, category: "Home", description: "Adjustable LED lamp with brightness control" }
  ];

  await Product.insertMany(products);
  console.log('✅ 5 Products Added');
  mongoose.disconnect();
}).catch(err => console.error(err));