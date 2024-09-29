// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ setUser, setError, setLoading }) {
  const [input, setInput] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLoading(true);
      setError(null);
      try {
        const userData = await fetchUserData(input);
        setUser(userData); // Update the user state with the fetched data
      } catch (error) {
        setError("Looks like we can't find the user."); // Error message
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub Username"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Track user input
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;



