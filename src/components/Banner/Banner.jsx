import React from "react";
import '../../styles/Banner.css';


function Banner({image, texte}) {
    return(
        <div>
            <div className="banner">
                <img className="banner-img" src={image} alt="Bannière slogan Kasa"/>
                <div className="banner-dark"></div>
                <p className="banner-text">{texte}</p>
            </div>
            
        </div>
        
    );
}

export default Banner;