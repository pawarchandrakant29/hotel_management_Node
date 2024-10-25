const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

// Routes for Ingredients
router.get('/', ingredientController.getIngredients);          // Get all ingredients
router.post('/', ingredientController.createIngredient);       // Create a new ingredient
router.get('/:id', ingredientController.getIngredientById);    // Get ingredient by ID
router.put('/:id', ingredientController.updateIngredient);     // Update ingredient by ID
router.delete('/:id', ingredientController.deleteIngredient);  // Delete ingredient by ID

module.exports = router;
