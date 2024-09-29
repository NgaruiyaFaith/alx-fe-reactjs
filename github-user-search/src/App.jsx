// src/App.jsx
import React, { useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";

function App() {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(null); // State to store error message

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar setUser={setUser} setError={setError} setLoading={setLoading} />

      {/* Display conditional UI based on the state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login} avatar`} width={100} />
          <h2>{user.name || user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;