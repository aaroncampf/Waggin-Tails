import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import LoggedinMessage from "./LoggedinMessage";
import  {Link} from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';


const LoginForm = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loggedIn } = useAuth();
  

  if (loggedIn) {
    return (
    <>
      <LoggedinMessage />
      
      </>
    );
  }

  const handleLogin = async () => {
   
    login();
  };


 // Perform authentication logic here (e.g., API request, token management)
    // If authentication is successful, call the login function
const sendUserLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns a token upon successful login
        // You may want to store this token securely, perhaps in localStorage or a cookie
        login();
      } else {
        // Handle authentication failure (display error message, etc.)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    
  };


  return (
    
   <>
    {loggedIn ? (
      <div>
        <p>Welcome! You are logged in.</p>
        <MDBBtn onClick={logout()}>Log Out</MDBBtn>
      </div>
    ) : (
      <div className='loginform'>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      Username: <MDBInput wrapperClass='mb-4' id='userName' type='email' value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="username" autoFocus={true}/>
      Password: <MDBInput wrapperClass='mb-4'  id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}  autoFocus={true}/>
      <MDBBtn className="mb-4" onClick={sendUserLogin}>Sign in</MDBBtn>
      <div className="text-center">
        <p>Not a member? <Link to="/signup">Register</Link></p>
        
</div>


</MDBContainer>
</div>
     )} 
   </>  
  
  );
};

export default LoginForm;