import React from 'react';
import arrow from "../../assets/arrow.png";

function Caroussel ({image, text}) {
    return (
        <>
            <div className="slider">
                <img className="slider-image"  src={image} alt=""/>
                <img className="arrow arrow-left" src={arrow}  alt="arrow left previous"/>
		        <img className="arrow arrow-right" src= {arrow} alt="arrow right next"/>
            </div>
            <div className="slider-text">
                <p>{text}</p>
            </div>
            <div className='slider-number'>
                <p></p>
            </div>
        
           
        </>
    
    );
  }
  
export default Caroussel;



  