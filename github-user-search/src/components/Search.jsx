// src/components/Search.jsx

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const results = await fetchUserData(query, location, minRepos);
            setUsers(results);
        } catch (err) {
            setError('Looks like we can’t find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GitHub users..."
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location..."
                />
                <input
                    type="number"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Minimum Repositories..."
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <img src={user.avatar_url} alt={user.login} />
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            {user.login}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;







