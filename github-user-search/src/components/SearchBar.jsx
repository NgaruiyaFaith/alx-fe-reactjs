// src/components/SearchBar.jsx
import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function SearchBar({ setUsers }) {
  const [input, setInput] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        const user = await searchUsers(input);
        setUsers([user]); // assuming we only want to search one user at a time
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub Username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
