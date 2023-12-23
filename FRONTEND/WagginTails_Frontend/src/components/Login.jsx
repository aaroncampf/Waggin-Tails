import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Home from './LoggedinMessage';

const Login = () => {
  const { loggedIn, logout } = useAuth();
  const [showAuthForms, setShowAuthForms] = useState(false);


  const toggleAuthForms = () => {
    setShowAuthForms(!showAuthForms);
  };

  return (
    <div>
      <a href="/" className='site-title'>Waggin' Tails</a>
      <Home/>

      {/* Show login/signup button if not logged in */}
      {!loggedIn && (
        <button onClick={toggleAuthForms}>Log In / Sign Up</button>
      )}

      {/* Additional header logic */}
      {loggedIn && (
        <button onClick={logout}>Log Out</button>
      )}

      {/* Render login/signup forms if the button is clicked */}
      {showAuthForms && (
        <div>
          <LoginForm />
          <SignUpForm />
        </div>
      )}
    </div>
  );
}

export default Login;