import React from 'react';
import { useAuth } from './AuthContext';

const Home = () => {
  const { loggedIn } = useAuth();

  return (
    <div>
      {loggedIn ? (
        <p>Welcome! You are logged in.</p>
        
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default Home;