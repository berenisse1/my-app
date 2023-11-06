import React from "react";
import'../../styles/Collapse.css';
import arrow from '../../assets/arrow.png'



function Collapse ({title, text}){
    return(
        <>
        <div className="collapse">
            <div className = "collapse-header">
                <div className = "collapse-title">
                    {title}
                </div>
                <img src= {arrow} alt="flèche" />
            </div>
            <div className ="collapse-text">
                {text}
            </div>
        </div>
        </>
    
    )
         

}

 
 
 
export default Collapse;