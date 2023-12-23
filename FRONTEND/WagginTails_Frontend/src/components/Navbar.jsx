import React from "react";
import  {Link} from "react-router-dom";


export const Navbar= () =>{


    return (
    <nav>
        <Link to="/"> WagginTails</Link>
        <ul>
            <li>
                <Link to="/allDogs">View All Dogs</Link>
            </li>
            <li> 
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/login">Login/Signup</Link>
            </li>
        </ul>

    </nav>
    );
}