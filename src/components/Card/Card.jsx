import React from 'react';
import '../../styles/Card.css';
import { Link } from "react-router-dom";

function Card({logement}) {
  return (
    <div className="card-container">
      <Link className="card-link" to={`/logements/${logement.id}`}>
          <h3 className="card-title">{logement.title}</h3>
          <img src={logement.cover} alt={logement.title} className="card-img" />
          <div className="dark-card-container"></div>
      </Link>
    </div>
  );
}

export default Card;
