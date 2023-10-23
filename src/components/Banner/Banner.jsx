import React from "react";
//import logo from '../assets/logo.png'
//import '../styles/Banner.css'


function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière slogan Kasa"/>
            <p className="banner-text">{texte}</p>
        </div>
    );
}

export default Banner;