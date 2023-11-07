import React from 'react';
import "../../styles/Tag.css";

function Tag ({title}) {
    return (
      <div className="tag-container">
        <p className="tag">{title}</p>
      </div>
    );
  }
  
  export default Tag;