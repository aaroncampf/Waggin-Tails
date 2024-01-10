import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Login = () => {
  const { loggedIn, logout } = useAuth();
  const [showAuthForms, setShowAuthForms] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [buttonText, setButtonText] = useState('Log In / Sign Up');

  useEffect(() => {
    setButtonText(loggedIn ? 'Log Out' : 'Log In / Sign Up');
  }, [loggedIn]);

  const toggleAuthForms = () => {
    setShowAuthForms(!showAuthForms);
    setShowLoginForm(true);
  };

  return (
    <div>
      <a href="/" className='site-title'>Waggin' Tails</a>

      {/* Show login/signup button if not logged in */}
      <button onClick={toggleAuthForms}>
        {showAuthForms ? "Close" : buttonText}
      </button>

      {/* Render login/signup forms if the button is clicked */}
      {showAuthForms && (
        <div>
          {showLoginForm ? <LoginForm /> : <SignUpForm />}

          <div className="toggle-form">
            {showLoginForm ? (
              <p>Don't have an account? <button onClick={() => setShowLoginForm(false)}>Sign Up</button></p>
            ) : (
              <p>Already have an account? <button onClick={() => setShowLoginForm(true)}>Log In</button></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
