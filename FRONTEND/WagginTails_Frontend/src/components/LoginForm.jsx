import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loggedIn } = useAuth();

  if (loggedIn) {
    return <p> </p>;
  } 

  const handleLogin = async (username) => {
   
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
      
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Username' id='username' type='email' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" autofocus={true}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}  autofocus={true}/>
      <MDBBtn className="mb-4" onClick={handleLogin}>Sign in</MDBBtn>
      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      
</div>


</MDBContainer>

     
  
  );
};

export default LoginForm;