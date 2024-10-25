const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/tables', require('./routes/tableRoutes'));
app.use('/orders', require('./routes/orderRoutes'));
app.use('/bookings', require('./routes/bookingRoutes'));
app.use('/menus', require('./routes/menuRoutes'));
app.use('/menu-items', require('./routes/menuItemRoutes'));
app.use('/ingredients', require('./routes/ingredientRoutes'));
app.use('/ingredient-types', require('./routes/ingredientTypeRoutes'));
app.use('/order-menu-items', require('./routes/orderMenuItemRoutes'));
app.use('/menu-item-ingredients', require('./routes/menuItemIngredientRoutes'));
app.use('/staff', require('./routes/staffRoutes'));
app.use('/staff-roles', require('./routes/staffRoleRoutes'));
app.use('/customers', require('./routes/customerRoutes'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
