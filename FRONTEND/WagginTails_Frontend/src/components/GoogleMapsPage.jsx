import {React, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { useJsApiLoader, GoogleMap , MarkerF, Autocomplete} from "@react-google-maps/api";


//map center. change this later
const center = { lat: 38.651623, lng: -90.25943 };
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function GoogleMapsPage() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
    libraries: ['places'],
  });

  

  if (!isLoaded) {
    return `<div> <h3> Loading...Please be patient!...</h3>`;
  }

  return (
    <Flex
      position="center"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
        {/* <Autocomplete>
             <input type='text' placeholder="Vet Offices" />
        </Autocomplete> */}
       
      <Box position="center" left={0} top={0} h="50%" w="50%">
        {/* {Google map box} */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
       
        >
            
            <MarkerF position={center}
            // icon={{ url: "https://www.kindpng.com/picc/m/23-235395_map-marker-png-google-maps-pin-svg-transparent.png" ,scaledSize:new google.maps.Size(60, 60)}}
            icon={{ url: "https://th.bing.com/th/id/OIP.e1RJtmcklkyj8qybIDJUGQHaF_?rs=1&pid=ImgDetMain" ,scaledSize:new google.maps.Size(60, 60)}}
            opacity={0.6}
           />
          {/* {Display markers or directions} */}
        </GoogleMap>
      </Box>
    </Flex>
  );
}
