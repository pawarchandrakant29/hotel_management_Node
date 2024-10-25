const StaffRole = require('../models/staffRoleModel');

// Get all staff roles
exports.getAllStaffRoles = async (req, res) => {
  try {
    const roles = await StaffRole.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new staff role
exports.createStaffRole = async (req, res) => {
  const role = new StaffRole({
    staff_role_code: req.body.staff_role_code,
    staff_role_description: req.body.staff_role_description
  });

  try {
    const newRole = await role.save();
    res.status(201).json(newRole);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
