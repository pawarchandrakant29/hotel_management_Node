const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Routes for Menu
router.get('/', menuController.getMenus);          // Get all menus
router.post('/', menuController.createMenu);       // Create a new menu
router.get('/:id', menuController.getMenuById);    // Get menu by ID
router.put('/:id', menuController.updateMenu);     // Update menu by ID
router.delete('/:id', menuController.deleteMenu);  // Delete menu by ID

module.exports = router;
