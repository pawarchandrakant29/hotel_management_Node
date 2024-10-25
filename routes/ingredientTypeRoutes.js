const express = require('express');
const router = express.Router();
const ingredientTypeController = require('../controllers/ingredientTypeController');

// Routes for Ingredient Types
router.get('/', ingredientTypeController.getIngredientTypes);          // Get all ingredient types
router.post('/', ingredientTypeController.createIngredientType);       // Create a new ingredient type
router.get('/:id', ingredientTypeController.getIngredientTypeById);    // Get ingredient type by ID
router.put('/:id', ingredientTypeController.updateIngredientType);     // Update ingredient type by ID
router.delete('/:id', ingredientTypeController.deleteIngredientType);  // Delete ingredient type by ID

module.exports = router;
