const mongoose = require('mongoose');

const menuItemIngredientSchema = new mongoose.Schema({
  menu_item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
  item_quantity: { type: Number, required: true }
});

module.exports = mongoose.model('MenuItemIngredient', menuItemIngredientSchema);
