import React, {  useState, useEffect } from 'react';
import './ViewAllDogs.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {useNavigate ,Navigate} from 'react-router-dom'
import ApplicationForm from './ApplicationForm';


export default function ViewAllDogs(){
    const [allDogs, setAllDogs] = useState([]);
   // const [dogToAdopt, setDogToAdopt] = useState("");
    let dog=null;
    const navigate = useNavigate()
	const [err, setErr] = useState('');
	//const [selected, setSelected] = useState("");
    const url= "http://localhost:8080/api/list";
	
    const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173/',
		}
	};

const getAllDogs =  async() =>{
	
	 
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



  const getDog = (dog_id) => async(e) =>{
    console.log("getDog", dog_id);
    const dogURL= `http://localhost:8080/api/dog/${dog_id}`
    console.log(dogURL);
    
	try {
		const response = await fetch(dogURL, options);
      
		if (!response.ok) {
		  throw new Error(`Error! status: ${response.status}`);
		}
  
		let result = await response.json();
        dog=result;
       //setDogToAdopt(result)
		console.log("dog :",result);
	  } catch (err) {
		setErr(err.message);
	  }
      
    //  navigate('/applicationform', {state:{dogToAdopt}});
    return navigate( "/applicationform",{state:{"dog":dog}});
//     return dogToAdopt;
      
  };

const handleAdopt= (dog_id) => async(e) => {
    console.log("handleadopt ", dog_id);

    setDogToAdopt(getDog(dog_id));
   console.log(dogToAdopt);
    
      navigate('/applicationform', {state:{"dog":dog}});

   //window.location.href="/applicationform"
   // return (<Link to="/applicationform" target="_self" dog={dogToAdopt}></Link>);
  //return <ApplicationForm dog={dogToAdopt} />
}
    return( 
        <>
          
               <h1> Here are all of our adoptable dogs.</h1>
               <MDBTable align="middle" striped hover table-sm="true" responsive>
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
          
          
               
                <tr scope="row" key={dog.id} className='individualDog'>
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
                    <button type="button" className="btn btn-dark" onClick={getDog(dog.id)}>Adopt Me!</button>
                    </td>
                </tr>
           
        );
      
    })}    
         </MDBTableBody>
         </MDBTable>
            
        </>  

    );
}