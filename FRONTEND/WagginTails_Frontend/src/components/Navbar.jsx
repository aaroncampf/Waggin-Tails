import React from "react";
import  {NavLink, Link} from "react-router-dom";

import "./Navbar.css";
export const Navbar= () =>{


    return (
    <nav>
        <Link to="/" className="title"> WagginTails</Link>
        <ul>
            <li>
                <NavLink to="/allDogs">View All Dogs</NavLink>
            </li>
            <li> 
            <NavLink  to="/about">About Us</NavLink >
            </li>
            <li>
                <NavLink to="/login">Login/Signup</NavLink>
            </li>
        </ul>

    </nav>
    );
}