import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { useAuth } from './components/AuthContext';
import FeaturedPets from './components/FeaturedPets'
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Button from './components/Button'
import Footer from './components/Footer'

const App = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <div>
      <Header/>
      <HeroSection/>
      <Button/>
      <FeaturedPets />
      <Footer/>
      {loggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div>
          <LoginForm />
          <SignUpForm />
        </div>
      )}
    </div>
  );
};

export default App;