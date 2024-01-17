import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const { login, loggedIn, logout } = useAuth();

  const useMock = import.meta.env.VITE_REACT_APP_USE_MOCK_API === 'true';

  const sendUserSignUpMock = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Signup successful for username: ${username}`);
    login(username);
  };

  const sendUserSignUpAPI = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, pwHash }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        login(username);
        setSignupError('');
      } else {
        setSignupError('Signup failed. Please check your details and try again.');
      }
    } catch (error) {
      setSignupError('Error during signup. Please try again later.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (useMock) {
      await sendUserSignUpMock();
      await sendUserSignUpAPI();
    }
  };

  if (loggedIn) {
    return <h1>Thank you for signing up {username}! You are now logged in.</h1>;
  }

  return (
    <div className="form-container">
      <div className="form">
        {signupError && <div className="signup-error">{signupError}</div>}
        <h2>Sign Up for an Account</h2>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        Username: <MDBInput wrapperClass='mb-4' id='userName' type='email' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" autoFocus={true}/>
            Password: <MDBInput wrapperClass='mb-4'  id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" autoFocus={true}/>
          <MDBBtn className="mb-4" onClick={handleSignUp}>Sign Up</MDBBtn>
          <div className="text-center">
            <p>Already a member? <Link to="/login">Log in</Link></p>
          </div>
        </MDBContainer>
      </div>
    </div>
  );
};

export default SignUpForm;
