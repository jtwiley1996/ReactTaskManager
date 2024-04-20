const express = require('express');
const router = express.Router();

// Import individual route modules
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');

// Define routes
router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
