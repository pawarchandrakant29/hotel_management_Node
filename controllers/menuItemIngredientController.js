const MenuItemIngredient = require('../models/MenuItemIngredient');

// Get all menu item ingredients
exports.getMenuItemIngredients = async (req, res) => {
  try {
    const menuItemIngredients = await MenuItemIngredient.find().populate('menu_item ingredient');
    res.json(menuItemIngredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new menu item ingredient
exports.createMenuItemIngredient = async (req, res) => {
  const menuItemIngredient = new MenuItemIngredient(req.body);
  try {
    const newMenuItemIngredient = await menuItemIngredient.save();
    res.status(201).json(newMenuItemIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get menu item ingredient by ID
exports.getMenuItemIngredientById = async (req, res) => {
  try {
    const menuItemIngredient = await MenuItemIngredient.findById(req.params.id).populate('menu_item ingredient');
    if (!menuItemIngredient) return res.status(404).json({ message: 'MenuItemIngredient not found' });
    res.json(menuItemIngredient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update menu item ingredient
exports.updateMenuItemIngredient = async (req, res) => {
  try {
    const updatedMenuItemIngredient = await MenuItemIngredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMenuItemIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete menu item ingredient
exports.deleteMenuItemIngredient = async (req, res) => {
  try {
    await MenuItemIngredient.findByIdAndDelete(req.params.id);
    res.json({ message: 'MenuItemIngredient deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
