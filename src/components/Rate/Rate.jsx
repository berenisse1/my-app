import React from 'react';
import "../../styles/Rate.css";
import fullStar from "../../assets/fullStar.png";
import emptyStar from "../../assets/emptyStar.png";


function Rate ({rate}) {

  const starNumber= [1,2,3,4,5]

  return (
    <div className="rate-container">
      {starNumber.map((number) => 
      rate >= number?
      <img key={number} src={fullStar}  alt="étoile" /> : <img key={number} src={emptyStar}  alt="étoile"/>)}
    </div>
    );
  }
  
export default Rate;
