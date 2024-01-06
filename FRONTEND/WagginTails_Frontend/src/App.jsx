

import './App.css'
import React, { useState } from 'react';
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
import ViewAllDogs from './components/ViewAllDogs';

import MultiStepForm from './components/MultistepForm';


const App = () => {
  const { loggedIn, logout } = useAuth();
  const [showForm, setShowForm] = useState(false);

  const handleSpecificButtonClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/allDogs" element={<ViewAllDogs />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>

        {/* Add your specific button */}
        <div className="button-container">
          <button onClick={handleSpecificButtonClick} className="center-button">
            Adoption Form
          </button>
        </div>

        {/* Conditionally render the form based on the showForm state */}
        {showForm && (
          <div className="center-container">
            <MultiStepForm />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;