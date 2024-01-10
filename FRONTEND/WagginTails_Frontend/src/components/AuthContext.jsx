import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);