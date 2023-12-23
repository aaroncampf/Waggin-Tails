import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {samplePets} from '../assets/samplePets';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function FeaturedPets() {
    console.log(samplePets);

    return(
      
      <>
      
     
                               

         
{ samplePets.animals.length > 0 ? 

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
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

{samplePets.animals.map((animal) => {   
			return (<SwiperSlide key={animal.index}>
          <img src={animal.primary_photo_cropped["full"]}  />
        </SwiperSlide>);
      
    })}
   
</Swiper>

     

: <h2>No Adoptable Dogs Found! Sorry!</h2>
}

        </>

    );
}

 