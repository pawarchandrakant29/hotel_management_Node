const OrderMenuItem = require('../models/OrderMenuItem');

// Get all order menu items
exports.getOrderMenuItems = async (req, res) => {
  try {
    const orderMenuItems = await OrderMenuItem.find().populate('order menu_item');
    res.json(orderMenuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new order menu item
exports.createOrderMenuItem = async (req, res) => {
  const orderMenuItem = new OrderMenuItem(req.body);
  try {
    const newOrderMenuItem = await orderMenuItem.save();
    res.status(201).json(newOrderMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get order menu item by ID
exports.getOrderMenuItemById = async (req, res) => {
  try {
    const orderMenuItem = await OrderMenuItem.findById(req.params.id).populate('order menu_item');
    if (!orderMenuItem) return res.status(404).json({ message: 'OrderMenuItem not found' });
    res.json(orderMenuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update order menu item
exports.updateOrderMenuItem = async (req, res) => {
  try {
    const updatedOrderMenuItem = await OrderMenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrderMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete order menu item
exports.deleteOrderMenuItem = async (req, res) => {
  try {
    await OrderMenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'OrderMenuItem deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
