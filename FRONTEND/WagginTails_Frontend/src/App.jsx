

import './App.css'

import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { useAuth } from './components/AuthContext';
import Footer from './components/Footer'

import { Navbar } from './components/Navbar';
import {Routes,Route}  from "react-router-dom";
import About from './components/About';
import Homepage from './components/Homepage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  const { loggedIn, logout } = useAuth();

  return (


    <div className="App"> 
    <div className="content">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/allDogs" element={<></>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
      </Routes>
      </div>
      <Footer/>
      {/* <Login/>
     
           */}
      
    </div>
  
   
      
      

   
    
  

   
  );
};

export default App;