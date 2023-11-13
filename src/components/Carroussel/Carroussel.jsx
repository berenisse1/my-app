import React from 'react';
import { useState } from "react";
import arrow from "../../assets/arrow.png";

function Caroussel ({slides, title, location}) {
    
    let [compteur , setCompteur] = useState(0);


    return (
        <>
            <div className="slider">
                <div>
                    <img className="slider-image"  src={slides[compteur]} alt=""/>
                </div>
                <div>
                    <button>
                        <img className="arrow arrow-left" src={arrow}  alt="arrow left previous"/>
                    </button> 
		            <button>
                        <img className="arrow arrow-right" src= {arrow} alt="arrow right next"/>
                    </button> 
                </div>  
            </div>
            <div className="slider-text">
                <p>{title}</p>
                <p>{location}</p>
            </div>
            <div className='slider-number'>
                <p>{compteur+1}/{slides.length}</p>
            </div>
        
           
        </>
    
    );
}
  
export default Caroussel;


  