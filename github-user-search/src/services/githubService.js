// src/services/githubService.js

import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

// Function to fetch user data based on search criteria
export const fetchUserData = async (query, location, minRepos) => {
    // Constructing the search query
    let searchQuery = query;

    // Adding location to the search query if provided
    if (location) {
        searchQuery += `+location:${location}`;
    }

    // Adding minRepos to the search query if provided
    if (minRepos) {
        searchQuery += `+repos:${minRepos}..`;
    }

    try {
        const response = await axios.get(`${BASE_URL}${encodeURIComponent(searchQuery)}`);
        return response.data.items; // Return the list of users
    } catch (error) {
        setError('Error fetching user data:', error);
        throw error; // Throw error to be handled in the component
    }
};




  