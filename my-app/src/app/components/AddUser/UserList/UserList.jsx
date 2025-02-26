import React from "react";
import "./UserList.css";

function UserList() {

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const handleEdit = (index) => {
    // Voeg hier je bewerkfunctionaliteit toe
    console.log(`Edit user at index ${index}`);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    window.location.reload(); // Herlaad de pagina om de lijst bij te werken
  };

  const renderUsers = () => {
    return users.map((user, index) => (
      <div key={index} className="userListItem">
        <span>{user.name} {user.lastName}</span>
        <button onClick={() => handleEdit(index)} className="editButton">✏️</button>
        <button onClick={() => handleDelete(index)} className="deleteButton">🗑️</button>
      </div>
    ));
  };

  return (
  <div className="userList">
    <h2>User List</h2>
    <div className="userListTable">
    {users.length > 0 ? renderUsers() : <p>No users found.</p>}
    </div>
  </div>
  );
}

export default UserList;