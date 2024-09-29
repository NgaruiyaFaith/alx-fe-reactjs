// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null); // Moved user state here
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSearch = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLoading(true);
      setError(null);
      setUser(null); // Reset user data before new search
      try {
        const userData = await fetchUserData(input);
        setUser(userData); // Store user data
      } catch (error) {
        setError("Looks like we can't find the user."); // Error message
      } finally {
        setLoading(false); // Stop loading after request
      }
    }
  };

  return (
    <div>
      {/* Search Input */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub Username"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Capture input
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering: Loading */}
      {loading && <p>Loading...</p>}

      {/* Conditional Rendering: Error */}
      {error && <p>{error}</p>}

      {/* Conditional Rendering: Display User Data */}
      {user && (
        <div>
          {/* Display avatar */}
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={100} />
          
          {/* Display login (username) */}
          <h2>{user.name || user.login}</h2>
          <p><strong>Username:</strong> {user.login}</p>
          
          {/* Link to GitHub profile */}
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

export default Search;




