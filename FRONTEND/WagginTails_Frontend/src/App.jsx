

import './App.css'


import FeaturedPets from './components/FeaturedPets'

import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { useAuth } from './components/AuthContext';
import Login from './components/Login'
import HeroSection from './components/HeroSection';
import Button from './components/Button'
import Footer from './components/Footer'
import FeaturedPets from './components/FeaturedPets';
import { Navbar } from './components/Navbar';
import {Routes,Route}  from "react-router-dom";
import About from './components/About';

const App = () => {
  const { loggedIn, logout } = useAuth();

  return (
    <>
    <div className="App"> 
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/allDogs" element={<></>}/>
        <Route path="/login" element={<LoginForm />}/>
      </Routes>
    </div>
    <div>
   
      {/* <Login/>
      <HeroSection/>
      <Button/>
      <FeaturedPets />

      <Footer/>
           */}
      </div>
      
      

   
    
    </>

   
  );
};

export default App;