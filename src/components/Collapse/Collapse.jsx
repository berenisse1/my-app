import React from "react";
import'../../styles/Collapse.css';
import arrow from '../../assets/arrow.png'


function Collapse ({collapse}){
    return(
        <>
        <div className="collapse">
            <div className = "collapse-header">
                <div className = "collapse-title">
                    <h3>{collapse.title}</h3>
                </div>
                <img src= {arrow} alt="flèche" />
            </div>
            <div className ="collapse-text">{collapse.text} </div>
        </div>
        </>
    
    )
         

}

 
 
 
export default Collapse;