import React from "react";
import Home from "./LoggedinMessage";
import HeroSection from "./HeroSection";
import FeaturedPets from "./FeaturedPets";
import { Button } from "@chakra-ui/react";
export const Homepage= () =>{


    return (
        <>
        <HeroSection/>
        <Button/>
        <FeaturedPets />
  
       
        </>

    );
}

export default Homepage;