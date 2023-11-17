import React from 'react';
import '../../styles/Card.css';
import { Link } from "react-router-dom";



function Card({logement}) {
  return (
    <div className="card-container">
      <Link className="card-link" to={`/logements/${logement.id}`}>
        <div className="card-img-container">
          <h3 className="card-title">{logement.title}</h3>
          <img src={logement.cover} alt={logement.title} className="card-img" />
        </div>
      </Link>
    </div>
  );
}

export default Card;
