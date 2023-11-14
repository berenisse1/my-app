import React from 'react';
import '../../styles/Card.css';
import { Link } from "react-router-dom";

function Card({logement}) {
    return (
      <div>
        <article>
          <Link to={`/logements/${logement.id}`}>
            <div>
              <h3 className="card-title">{logement.title}</h3>
              <img src={logement.cover} alt={logement.title} className="card-img" />
            </div>
          </Link>
        </article>
      </div>
    );
}

export default Card;
