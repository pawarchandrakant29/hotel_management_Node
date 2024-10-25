const express = require('express');
const router = express.Router();
const orderMenuItemController = require('../controllers/orderMenuItemController');

// Routes for Order Menu Items
router.get('/', orderMenuItemController.getOrderMenuItems);          // Get all order menu items
router.post('/', orderMenuItemController.createOrderMenuItem);       // Create a new order menu item
router.get('/:id', orderMenuItemController.getOrderMenuItemById);    // Get order menu item by ID
router.put('/:id', orderMenuItemController.updateOrderMenuItem);     // Update order menu item by ID
router.delete('/:id', orderMenuItemController.deleteOrderMenuItem);  // Delete order menu item by ID

module.exports = router;
