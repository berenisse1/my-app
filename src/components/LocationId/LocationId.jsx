import React from 'react';
import '../../styles/LocationId.css';

function LocationId ({title, location}) {
    return (
        <div className="logement-text">
            <p className="logement-title">{title}</p>
            <p className="logement-location" >{location}</p>
        </div>  

    );
}

export default LocationId;