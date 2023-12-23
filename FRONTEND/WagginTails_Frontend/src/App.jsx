

import './App.css'

import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { useAuth } from './components/AuthContext';
import Login from './components/Login'
import HeroSection from './components/HeroSection';
import Button from './components/Button'
import Footer from './components/Footer'
import FeaturedPets from './components/FeaturedPets';
const App = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <>
    <div className="App"> 
      <Navbar />
    </div>
    <div>
      {/* <Login/> */}
      <HeroSection/>
      <Button/>
      <FeaturedPets />
      <Footer/>

    </div>
    
    </>
    
  );
};

export default App;