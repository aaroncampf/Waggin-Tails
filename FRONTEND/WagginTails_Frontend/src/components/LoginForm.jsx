import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from "react-router-dom";
import { MDBContainer, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const LoginForm = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const { login, logout, loggedIn } = useAuth();

  // Determine if mock logic should be used
  const useMock = import.meta.env.VITE_REACT_APP_USE_MOCK_API === 'true';

  // Mock user data for simulation
  const mockUser = {
    username: 'testuser',
    password: 'password123'
  };

  const sendUserLoginMock = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (userName === mockUser.username && password === mockUser.password) {
      setLoginError('');
      login(userName);
    } else {
      setLoginError('Login failed: Incorrect username or password');
    }
  };

  const sendUserLoginAPI = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoginError('');
        login(data.username);
      } else {
        setLoginError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setLoginError('Error during login. Please try again later.');
    }
  };

  const handleLogin = async () => {
    if (useMock) {
      await sendUserLoginMock();
    } else {
      await sendUserLoginAPI();
    }
  };

  return (
    <>
    
      {loggedIn ? (
        <div className="form-container">
        <div className="form">
          <h2>Welcome {userName}! You are logged in.</h2>
          <MDBBtn onClick={logout}>Log Out</MDBBtn>
        </div>
        </div>
      ) : (
        <div className="form-container">
        <div className="form">
        <h2>Log In to Your Account</h2>
          
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            {loginError && <div className="login-error">{loginError}</div>}
            Username: <MDBInput wrapperClass='mb-4' id='userName' type='email' value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="username" autoFocus={true}/>
            Password: <MDBInput wrapperClass='mb-4'  id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" autoFocus={true}/>
            <MDBBtn className="mb-4" onClick={handleLogin}>Log in</MDBBtn>
            <div className="text-center">
              <p>Not a member? <Link to="/signup">Register</Link></p>
            </div>
          </MDBContainer>
          </div>
        </div>      
        )} 
    </>
  );
};

export default LoginForm;
