const Staff = require('../models/staffModel');

// Get all staff
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find().populate('staff_role');
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new staff
exports.createStaff = async (req, res) => {
  const staff = new Staff({
    staff_first_name: req.body.staff_first_name,
    staff_last_name: req.body.staff_last_name,
    staff_role: req.body.staff_role
  });

  try {
    const newStaff = await staff.save();
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
