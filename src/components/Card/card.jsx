import React from 'react';
import '../../styles/Card.css'

function Card({image, title}) {
    return (
      <>
        <img src={image} alt={title} className="card-img" />
        <h2 className="card-title">{title}</h2>
      </>
    );
}

export default Card;