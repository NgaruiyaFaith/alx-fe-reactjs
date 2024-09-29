// src/services/githubService.js

import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

// Function to fetch user data based on search criteria
export const fetchUserData = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}${encodeURIComponent(query)}`);
        return response.data.items; // Return the list of users
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Throw error to be handled in the component
    }
};



  