import React from "react";
import { useState } from "react";
import'../../styles/Collapse.css';
import arrow from '../../assets/arrow.png';



function Collapse ({title, text}){

    const [isOpen , setIsOpen] = useState(false);
    const handleClick = () => {
        isOpen = setIsOpen(!isOpen);
          
    }

    return(
        <>
        <div className="collapse">
            <div className = "collapse-header" onClick={handleClick}>
                <div className = "collapse-title">
                    {title}
                </div>
                <img src= {arrow} alt="flèche" />
            </div>
            {isOpen && <div className ="collapse-text">{text}</div>}
        </div>
        </>
    
    );
         

}

 
 
 
export default Collapse;