import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


function LoginSignupForm({ onClose }) {
  const [mode, setMode] = useState('login');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);


  const onSubmit = async (data) => {
    setIsLoading(true);
    // Send login/signup request to backend API
    // This is just an example for now.
    try {
      const response = await fetch(mode === 'login' ? '/api/login' : '/api/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.success) {
        // Login/signup successful, redirect to the application
        window.location.href = '/dashboard';
      } else {
        // Login/signup failed, show error message
        alert(json.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };


  return (
    <div className="login-signup-form">
      <h2 className="form-title">{mode === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {mode === 'signup' && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              {...register('username', { required: true })}
            />
            {errors.username && <span className="error">{errors.username.message}</span>}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
          />
          {errors.email && <span
 
className="error">{errors.email.message}</span>}
        </div>
       
<div className="form-group">


<label htmlFor="password">Password</label>


<input  
type="password"    
id="password"    
name="password"
            {...register('password',
            { required: true, minLength: 8 })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>
        {mode === 'signup' && (
          <div className="form-group">


<label htmlFor="confirmPassword">Confirm Password</label>


<input
type="password"
id="confirmPassword"
name="confirmPassword"
              {...register('confirmPassword',
              { required:true, validate: (value) => value === data.password })}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
          </div>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : `${mode === 'login' ? 'Login' : 'Sign Up'}`}
        </button>
      </form>
      {mode === 'login' && (
        <p>
          Don't have an account?
          <a href="#" onClick={toggleMode}>
            Sign Up
          </a>
        </p>
      )}
      {mode === 'signup' && (
        <p>
          Already have an account?
          <a href="#" onClick={toggleMode}>
            Login
          </a>
        </p>
      )}
    </div>
  );
}


export default LoginSignupForm;
