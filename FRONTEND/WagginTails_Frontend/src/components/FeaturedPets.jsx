import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {samplePets} from '../assets/samplePets';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function FeaturedPets() {
  const [allDogs, setAllDogs] = useState([]);
	const [err, setErr] = useState('');
	//const [selected, setSelected] = useState("");
    const url= "http://localhost:8080/api/list";
	
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
      
      <div className='carousel'>

{ allDogs.length > 0 ? 

         <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >


        
     
{allDogs.map((dog) => {   
			return (<SwiperSlide key={dog.id} >
          <figure>
          <img src={dog["dogProfilePhotoUrl"]}  />
          <figcaption>{dog.name}</figcaption>
          </figure>
        </SwiperSlide>);
      
    })}
   
</Swiper>

     

: <h2>No Adoptable Dogs Found! Sorry!</h2>
}
</div>

    );
}

 