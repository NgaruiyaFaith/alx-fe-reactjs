// src/components/Search.jsx
import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState(""); // State for location
  const [minRepos, setMinRepos] = useState(""); // State for minimum repos
  const [users, setUsers] = useState([]); // For multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    
    try {
      const query = {
        username: input,
        location,
        minRepos
      };
      const userData = await fetchAdvancedUserData(query); // Advanced API call
      setUsers(userData.items); // Store users list
    } catch (error) {
      setError("Looks like we can't find any users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">GitHub Advanced Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search by Username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* Display Users */}
      {users.length > 0 && (
        <div className="mt-6">
          {users.map((user) => (
            <div key={user.id} className="flex items-center mb-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <p>{user.location || "No location available"}</p>
                <p>Repositories: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;





