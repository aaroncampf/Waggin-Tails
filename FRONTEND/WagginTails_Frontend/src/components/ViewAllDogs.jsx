import React, {  useState, useEffect } from 'react';
import './ViewAllDogs.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

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
          
               <h1> Here are all of our adoptable dogs.</h1>
               <MDBTable align="middle" striped hover table-sm  responsive>
               <MDBTableHead dark>
                <tr>
                    
                    <th scope='col'>Profile Photo</th>
                    <th scope='col' >Name</th>
                    <th scope='col' >Breed</th>
                    <th scope='col' >Age</th>
                    <th scope='col' >Primary Color</th>
                    <th scope='col' >About this dog</th>
                    <th scope='col' ></th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
               {allDogs.map((dog) => {   
			return ( 
          
          
               
                <tr scope="row" id={dog.id} className='individualDog'>
                    <td >
                    <img src={dog["dogProfilePhotoUrl"]} width="300px" height="300px"  />   
                    </td>
                    <td>
                        {dog.name}
                    </td>
                    <td>
                        {dog.breed}
                    </td>
                    <td>
                        {dog.age}
                    </td>
                    <td>
                        {dog.color}
                    </td>
                    <td>
                        {dog.natureDesc}
                    </td>
                    <td>
                    <button type="button" class="btn btn-dark">Adopt Me!</button>
                    </td>
                </tr>
           
        );
      
    })}    
         </MDBTableBody>
         </MDBTable>
            
        </>  

    );
}