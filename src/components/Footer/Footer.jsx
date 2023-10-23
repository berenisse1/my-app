import React from 'react';
import logo from '../../assets/logo.png'
//import '../styles/Footer.css'

function Footer () {
    return (
      <footer className="footer">
        <img src={logo} alt="logo agence kasa" className="footer-logo" />
        <p className="footer-text">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;