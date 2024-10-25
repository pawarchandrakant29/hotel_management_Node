const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Routes for Orders
router.get('/', orderController.getOrders);          // Get all orders
router.post('/', orderController.createOrder);       // Create a new order
router.get('/:id', orderController.getOrderById);    // Get order by ID
router.put('/:id', orderController.updateOrder);     // Update order by ID
router.delete('/:id', orderController.deleteOrder);  // Delete order by ID

module.exports = router;
