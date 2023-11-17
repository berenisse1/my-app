import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "../../styles/ErrorPage.css";


function ErrorPage() {
    return(
        <div>
            <Header />
            <main>
                <div className="error-container">
                    <p className="error-code">
                        404
                    </p>
                    <p className="error-text">
                        Oups! La page que vous demandez n'existe pas
                    </p>
                    <nav>
                        <Link className="link-retour-home" to="/">Retournez sur la page d'acceuil</Link>
                    </nav>
                </div>
            </main>
            <Footer/>
        </div>
    )
}


export default ErrorPage;