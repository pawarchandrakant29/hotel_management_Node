const express = require('express');
const router = express.Router();
const menuItemIngredientController = require('../controllers/menuItemIngredientController');

// Routes for Menu Item Ingredients
router.get('/', menuItemIngredientController.getMenuItemIngredients);          // Get all menu item ingredients
router.post('/', menuItemIngredientController.createMenuItemIngredient);       // Create a new menu item ingredient
router.get('/:id', menuItemIngredientController.getMenuItemIngredientById);    // Get menu item ingredient by ID
router.put('/:id', menuItemIngredientController.updateMenuItemIngredient);     // Update menu item ingredient by ID
router.delete('/:id', menuItemIngredientController.deleteMenuItemIngredient);  // Delete menu item ingredient by ID

module.exports = router;
