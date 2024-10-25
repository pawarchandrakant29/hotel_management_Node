const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Routes for Booking
router.get('/', bookingController.getBookings);       // Get all bookings
router.post('/', bookingController.createBooking);    // Create a booking
router.get('/:id', bookingController.getBookingById); // Get a single booking by ID
router.put('/:id', bookingController.updateBooking);  // Update booking by ID
router.delete('/:id', bookingController.deleteBooking); // Delete booking by ID

module.exports = router;
