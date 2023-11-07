import React from 'react';
import "../../styles/Rate.css";
import fullStar from "../../assets/fullStar.png";
import emptyStar from "../../assets/emptyStar.png";

function Rate ({star}) {
 
  return (
    <div className="rate-container">
      <img src={fullStar}  alt="étoile" />
      <img src={emptyStar} alt="étoile vide" />  
    </div>
    );
  }
  
export default Rate;