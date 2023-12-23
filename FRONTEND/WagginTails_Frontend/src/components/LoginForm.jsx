import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loggedIn } = useAuth();

  if (loggedIn) {
    return <p> </p>;
  }

  const handleLogin = async () => {
    login();
  };


 // Perform authentication logic here (e.g., API request, token management)
    // If authentication is successful, call the login function
//   const handleLogin = async () => {
//     try {
//       const response = await fetch('YOUR_API_ENDPOINT/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Assuming the API returns a token upon successful login
//         // You may want to store this token securely, perhaps in localStorage or a cookie
//         login();
//       } else {
//         // Handle authentication failure (display error message, etc.)
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };


  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;