

import './App.css'


import FeaturedPets from './components/FeaturedPets'

import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { useAuth } from './components/AuthContext';

import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Button from './components/Button'
import Footer from './components/Footer'

import GoogleMapPage from './components/GoogleMapsPage'

function App() {

  return (
    <>
      <div>
        <GoogleMapPage />
      

const App = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <div>

      <Header/>
      <HeroSection/>
      <Button/>
      <FeaturedPets />

      <Footer/> */}
          
      </div>
      
      
    
    </>

      <Footer/>
   
  );
};

export default App;