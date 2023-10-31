import React from 'react';
import '../../styles/Card.css';
import { Link } from "react-router-dom";

function Card({logement}) {
    return (
      <Link to={`/logements/${logement.id}`}>
        <article>
          <img src={logement.cover} alt={logement.title} className="card-img" />
          <h2 className="card-title">{logement.title}</h2>
        </article>
      </Link>
    );
}

export default Card;