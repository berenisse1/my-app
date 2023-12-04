import React from 'react';
import { useState } from "react";
import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";
import "../../styles/Carroussel.css";

function Caroussel ({slides}) {
    
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
                <div className="slider-image" >
                    <img src={slides[compteur]} alt=""/>
                </div>
                {(slides.length > 1) &&
                <div>
                    <img className="arrow arrow-left" src={arrowLeft} alt="arrow left previous"onClick={previous}/>
                    {(compteur < 0) && setCompteur(slides.length-1)}
                    <img  className="arrow arrow-right" src= {arrowRight} alt="arrow right next"onClick={next}/>
                    {(compteur >= slides.length) && setCompteur(0)}
                    <div className='slider-number' >
                        {compteur+1}/{slides.length}
                    </div>
                </div> 
                }
            </div>
        </>
    
    );
}
  
export default Caroussel;


  