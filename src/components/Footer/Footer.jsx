import React from 'react';
import logoFooter from '../../assets/logoFooter.png';
import '../../styles/Footer.css';

function Footer () {
    return (
      <footer className="footer">
        <img src={logoFooter} alt="logo agence kasa" className="footer-logo" />
        <p className="footer-text">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;