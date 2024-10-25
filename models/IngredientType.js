const mongoose = require('mongoose');

const ingredientTypeSchema = new mongoose.Schema({
  ingredient_type_description: { type: String, required: true }
});

module.exports = mongoose.model('IngredientType', ingredientTypeSchema);
