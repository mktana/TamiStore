const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A customer must have a name'],
    unique: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, 'A customer must have a phone number'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    // select: false
  }
});
 
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
