import React from 'react'
import GoogleMapsPage from './GoogleMapsPage'

function About() {
    return(
        <div className='about'>
            <h2>Currently We are located here !!</h2>
            <h3>  Please Visit Us to find more about your future Dog!</h3>
            <br />
            <GoogleMapsPage />
          
        </div>
    )
}

export default About