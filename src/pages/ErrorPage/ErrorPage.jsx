import React from "react";
//import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";


function ErrorPage() {
    return(
        <div>
            <Header />
            <main>
                <div>
                    <p className="error-code">404</p>
                    <p className="error-text">
                        Oups! La page que vous demandez n'existe pas
                    </p>
                    <nav>
                        <Link to="/">Retournez sur la page d'acceuil</Link>
                    </nav>
                </div>
            </main>
            <Footer/>
        </div>
    )
}


export default ErrorPage;