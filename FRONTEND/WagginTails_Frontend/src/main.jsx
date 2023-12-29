import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from "react-dom/client";
import App from './App';
import { AuthProvider } from './components/AuthContext';
import './index.css'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// old main.jsx
//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App.jsx'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
