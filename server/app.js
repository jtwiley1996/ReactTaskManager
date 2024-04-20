const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const routes = require('./routes');

// Use the routes defined in the routes/index.js file
app.use('/api', routes);

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to your Task Manager API!');
});

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
