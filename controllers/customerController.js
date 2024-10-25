const Customer = require('../models/customerModel');

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new customer
exports.createCustomer = async (req, res) => {
  const customer = new Customer({
    customer_first_name: req.body.customer_first_name,
    customer_surname: req.body.customer_surname,
    phone_number: req.body.phone_number,
    cellphone_number: req.body.cellphone_number,
    email_address: req.body.email_address,
    other_customer_details: req.body.other_customer_details
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
