import React from "react";
import HeroSection from "./HeroSection";
import FeaturedPets from "./FeaturedPets";
import { Button } from "@chakra-ui/react";
export const Homepage= () =>{


    return (
        <>
        <HeroSection/>
        <FeaturedPets />
  
        </>

    );
}

export default Homepage;