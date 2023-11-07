import React from 'react';
import arrow from "../../assets/arrow.png"

function Caroussel ({image, text}) {
    return (
        <>
            <div className="banner">
                <img className="banner-image"  src={image} alt=""/>
                <img className="arrow-left" src={arrow}  alt="arrow left previous"/>
		        <img className="arrow-right" src= {arrow} alt="arrow right next"/>
            </div>
            <div className="banner-text">
                <p>{text}</p>
            </div>
            <div className='slide-number'>
                <p></p>
            </div>
        
           
        </>
    
    );
  }
  
export default Caroussel;



  