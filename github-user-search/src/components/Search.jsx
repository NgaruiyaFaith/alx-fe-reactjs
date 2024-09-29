// src/components/SearchBar.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the API service

function SearchBar({ setUser, setError, setLoading }) {
  const [input, setInput] = useState(""); // State to store user input

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setLoading(true); // Set loading state
      setError(null); // Reset error state
      try {
        const userData = await fetchUserData(input); // Fetch user data from API
        setUser(userData); // Update user data in the parent state
      } catch (error) {
        setError("Looks like we can't find the user."); // Set error state
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub Username"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input value
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

