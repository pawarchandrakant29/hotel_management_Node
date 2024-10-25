const IngredientType = require('../models/IngredientType');

// Get all ingredient types
exports.getIngredientTypes = async (req, res) => {
  try {
    const ingredientTypes = await IngredientType.find();
    res.json(ingredientTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new ingredient type
exports.createIngredientType = async (req, res) => {
  const ingredientType = new IngredientType(req.body);
  try {
    const newIngredientType = await ingredientType.save();
    res.status(201).json(newIngredientType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get ingredient type by ID
exports.getIngredientTypeById = async (req, res) => {
  try {
    const ingredientType = await IngredientType.findById(req.params.id);
    if (!ingredientType) return res.status(404).json({ message: 'IngredientType not found' });
    res.json(ingredientType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update ingredient type
exports.updateIngredientType = async (req, res) => {
  try {
    const updatedIngredientType = await IngredientType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedIngredientType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete ingredient type
exports.deleteIngredientType = async (req, res) => {
  try {
    await IngredientType.findByIdAndDelete(req.params.id);
    res.json({ message: 'IngredientType deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
