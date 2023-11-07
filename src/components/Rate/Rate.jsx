import React from 'react';
import "../../styles/Rate.css";

function Rate ({star}) {

    return (
      <div className="rate-container">
        <img src={star}  alt="étoile" />
        <img src={star} alt="étoile vide" />  
      </div>
    );
  }
  
  export default Rate;