const mongoose = require('mongoose');

const orderMenuItemSchema = new mongoose.Schema({
  order_menu_item_quantity: { type: Number, required: true },
  order_menu_item_comments: { type: String },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  menu_item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }
});

module.exports = mongoose.model('OrderMenuItem', orderMenuItemSchema);
