// userController.js
const db = require('../db'); // Import the database connection

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users'; // Replace 'users' with your actual table name

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  // Add other database operations as needed
};
