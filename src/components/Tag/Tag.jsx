import React from 'react';
import "../../styles/Tag.css";

function Tag ({title}) {
    return (
     
      <div className="tag-container">
        {title}
      </div>
    );
  }
  
export default Tag;