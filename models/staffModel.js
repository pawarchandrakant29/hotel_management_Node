const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  staff_first_name: { type: String, required: true },
  staff_last_name: { type: String, required: true },
  staff_role: { type: mongoose.Schema.Types.ObjectId, ref: 'StaffRole', required: true }
});

module.exports = mongoose.model('Staff', staffSchema);
