import React from 'react';
import { useState } from "react";
import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";

function Caroussel ({slides, title, location}) {
    
    let [compteur , setCompteur] = useState(0);
    const next = () => {
        compteur = setCompteur(compteur+1);     
    }
    
    const previous = () => {
        compteur = setCompteur(compteur-1);
    }
    
    return (
        <>
            <div className="slider">
                <div>
                    <img className="slider-image"  src={slides[compteur]} alt=""/>
                </div>
                <div>
                    <button>
                        <img className="arrow arrow-left" src={arrowLeft} alt="arrow left previous"onClick={previous}/>
                        {(compteur < 0) && setCompteur(slides.length-1)}
                    </button> 
		            <button>
                        <img className="arrow arrow-right" src= {arrowRight} alt="arrow right next"onClick={next}/>
                        {(compteur >= slides.length) && setCompteur(0)}
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


  