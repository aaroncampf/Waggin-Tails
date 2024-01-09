import React, { useEffect, useState } from 'react';

import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import MultistepForm from './MultistepForm';


export default function ApplicationForm() {
  
    const [showForm, setShowForm] = useState(false);
    const location = useLocation();

    const handleSpecificButtonClick = () => {
      setShowForm((prevShowForm) => !prevShowForm);
    };
    let dog=location.state
    
    const url= "http://localhost:8080/api/saveAdoptionApplication";
	
    return( <>
        <h2>

                Adoption Application for :  {location.state.dog.name}

        
        </h2>
        <MultistepForm dog={location.state.dog}/>
        </>
    );
}

 