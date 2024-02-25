// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');


// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
