// // userService.js
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3001/api/users'; // Replace with your actual backend API URL
// //Use the backend 

// const userService = {
//   getAllUsers: async () => {
//     try {
//       const response = await axios.get(API_BASE_URL);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   getUserById: async (userId) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/${userId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   createUser: async (name, email) => {
//     try {
//       const response = await axios.post(API_BASE_URL, { name, email });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   updateUser: async (userId, name, email) => {
//     try {
//       const response = await axios.put(`${API_BASE_URL}/${userId}`, { name, email });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   deleteUser: async (userId) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/${userId}`);
//     } catch (error) {
//       throw error;
//     }
//   },
// };


// export default userService;
// UserService.js
const API_BASE_URL = 'http://localhost:3002/api/users'; // Adjust the API URL based on your backend setup

const UserService = {
  getAllUsers: async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
