import React, {  useState, useEffect } from 'react';
import './ViewAllDogs.css'
export default function ViewAllDogs(){
    const [allDogs, setAllDogs] = useState([]);
	const [err, setErr] = useState('');
	//const [selected, setSelected] = useState("");
    const url= "http://localhost:8080/dog/list";
	
const getAllDogs =  async() =>{
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173/',
		}
	};

	 
	try {
		const response = await fetch(url, options);
      
		if (!response.ok) {
		  throw new Error(`Error! status: ${response.status}`);
		}
  
		let result = await response.json();
	   
		setAllDogs(result);
		console.log(result);
	  } catch (err) {
		setErr(err.message);
		
		
	  }
	


	}


  useEffect(() => {
    getAllDogs();
	
  },[]);





    return( 
        <>
            <div>
               <h1> Here are all of our adoptable dogs.</h1>
               {allDogs.map((dog) => {   
			return ( <div id={dog.id} className='individualDog'>
          <img src={dog["dogProfilePhotoUrl"]} width="500px" height="500px"  /> 
          <div className='dogDetails'> </div>
          <br/>
          </div>
        );
      
    })}              
            </div>
        </>  

    );
}