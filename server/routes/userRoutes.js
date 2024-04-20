const express = require('express');
const router = express.Router();

// Import the controller functions
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');

// Define the routes
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
