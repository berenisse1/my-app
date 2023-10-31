import React from "react";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


function ErrorPage() {
    return(
        <div>
            <Header />
            <h1>ErrorPage</h1>
            <main>
                <Error/>
            </main>
            <Footer/>
        </div>
    )
}


export default ErrorPage;