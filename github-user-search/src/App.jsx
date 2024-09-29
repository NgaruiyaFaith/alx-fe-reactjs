// src/App.jsx
import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search setUser={setUser} setError={setError} setLoading={setLoading} />

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p>{error}</p>}

      {/* Display user info if available */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={100} />
          <h2>{user.name || user.login}</h2>
          <p><strong>Username:</strong> {user.login}</p> {/* Display login */}
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
