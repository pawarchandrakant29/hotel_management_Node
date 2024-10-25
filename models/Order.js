const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_date_time: { type: Date, required: true },
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }
});

module.exports = mongoose.model('Order', orderSchema);
