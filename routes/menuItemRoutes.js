const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

// Routes for MenuItem
router.get('/', menuItemController.getMenuItems);          // Get all menu items
router.post('/', menuItemController.createMenuItem);       // Create a new menu item
router.get('/:id', menuItemController.getMenuItemById);    // Get menu item by ID
router.put('/:id', menuItemController.updateMenuItem);     // Update menu item by ID
router.delete('/:id', menuItemController.deleteMenuItem);  // Delete menu item by ID

module.exports = router;
