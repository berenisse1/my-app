import React from "react";
import { useState } from "react";
import'../../styles/Collapse.css';
import arrowUp from '../../assets/arrowUp.png';
import arrowDown from '../../assets/arrowDown.png';




function Collapse ({title, text}){

    let [isOpen , setIsOpen] = useState(false);
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
                {isOpen? <img src= {arrowDown} alt="flèche" /> :<img src= {arrowUp} alt="flèche" />} 
            </div>
            {isOpen && <div className ="collapse-text">{text}</div>}
        </div>
        </>
    
    );
         

}

 
 
 
export default Collapse;