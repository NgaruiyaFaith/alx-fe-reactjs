import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext); // Consuming the context

  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>Name: {userData.name}</h2>
      <p style={{ fontSize: '18px' }}>Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserProfile;
