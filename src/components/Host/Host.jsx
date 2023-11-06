import React from 'react';

function Host ({image, name}) {
    return (
        <>
            <div className="host-picture">
                <img src={image} alt="Photo hote" />
            </div>
            <div className="host-name">
                <p >{name}</p>
            </div>
        </>
    
    );
  }
  
  export default Host;