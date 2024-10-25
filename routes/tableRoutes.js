const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// Routes for Table
router.get('/', tableController.getTables);
router.post('/', tableController.createTable);
router.get('/:id', tableController.getTableById);
router.put('/:id', tableController.updateTable);
router.delete('/:id', tableController.deleteTable);

module.exports = router;
