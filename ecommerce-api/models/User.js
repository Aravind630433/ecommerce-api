const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' }
});
module.exports = mongoose.model('User', UserSchema);
