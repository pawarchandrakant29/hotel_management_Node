const Ingredient = require('../models/Ingredient');

// Get all ingredients
exports.getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find().populate('ingredient_type');
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new ingredient
exports.createIngredient = async (req, res) => {
  const ingredient = new Ingredient(req.body);
  try {
    const newIngredient = await ingredient.save();
    res.status(201).json(newIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get ingredient by ID
exports.getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id).populate('ingredient_type');
    if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });
    res.json(ingredient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update ingredient
exports.updateIngredient = async (req, res) => {
  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete ingredient
exports.deleteIngredient = async (req, res) => {
  try {
    await Ingredient.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ingredient deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
