// src/components/UserList.jsx
import React from "react";

function UserList({ users }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <p>{user.bio || "No bio available"}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;
