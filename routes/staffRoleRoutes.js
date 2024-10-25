const express = require('express');
const router = express.Router();
const staffRoleController = require('../controllers/staffRoleController');

router.get('/', staffRoleController.getAllStaffRoles);
router.post('/', staffRoleController.createStaffRole);

module.exports = router;
