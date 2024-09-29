// src/services/githubService.js
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the query
    let query = `${username ? `q=${username}` : "q="}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    
    const response = await axios.get(`${GITHUB_API_URL}?${query}`);
    return response.data; // Return the list of users
  } catch (error) {
    throw error;
  }
};



  