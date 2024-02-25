// // // UserList.js
// import React, { useEffect, useState } from 'react';
// import $ from 'jquery';
// import 'datatables.net';
// import '../UserList.css';
// import UserService from '../services/UserService';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersData = await UserService.getAllUsers();
//         setUsers(usersData);

//         // Initialize DataTable after fetching data
//         $('#userTable').DataTable();
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="user-list-container">
//       <h1>User List</h1>
//       <table id="userTable" className="display datatable" >
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;
// UserList.js
import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import '../UserList.css';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const dataTableRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await UserService.getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    // Initialize DataTable after fetching data and setting it in state
    if (users.length > 0 && !dataTableRef.current) {
      dataTableRef.current = $('#userTable').DataTable();
    }

    return () => {
      // Destroy DataTable instance on component unmount
      if (dataTableRef.current) {
        dataTableRef.current.destroy();
      }
    };
  }, [users]);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <table id="userTable" className="display">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
