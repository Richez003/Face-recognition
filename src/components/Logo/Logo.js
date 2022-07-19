import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = ()=> {
    return (
    <div> 
         <Tilt className="Tilt br2 shadow-2 " options={{ max : 60 }} style={{ height: 150, width: 150, marginLeft: '15px' }} >
         <div className="Tilt-inner"><img style={{padding:'25px'}} alt="logo" src={brain}/> </div>
         </Tilt>
     </div>
    )
}

export default Logo