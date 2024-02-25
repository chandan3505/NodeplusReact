// server.js
const express = require('express');
const cors = require('cors'); // If you want to enable Cross-Origin Resource Sharing
const userRoutes = require('./routes/userRoutes'); // Adjust the path based on your project structure
const db = require('./db'); 
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors()); // Enable CORS for all routes, adjust as needed
app.use(express.json()); // Parse JSON request bodies

//



// Routes
app.use('/api/users', userRoutes); // Adjust the route path based on your requirements

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
