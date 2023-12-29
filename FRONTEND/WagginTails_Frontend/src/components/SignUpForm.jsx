import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoggedinMessage from "./LoggedinMessage";


const SignUpForm = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loggedIn } = useAuth();

  if (loggedIn) {
    return <p> Welcome! you are now logged in.</p>;
  }

  const handleSignUp = async () => {
    login();
      
  };

  
//   // Perform signup logic here (e.g., API request, user creation)
const sendUserSignUp = async () => {
    try {
      const response = await fetch( 'http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });
  
      if (response.ok) {
        // Assuming the API returns some data upon successful signup (optional)
        const data = await response.json();
        // Optionally handle the response data
        console.log('Signup successful:', data);
        
        // Perform login after successful signup (optional)
        login();
      } else {
        // Handle signup failure (display error message, etc.)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };


  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={sendUserSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;