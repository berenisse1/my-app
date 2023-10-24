import React from "react";
import Error from "../../components/ErrorPage/ErrorPage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function ErrorPage() {
    return(
        <div>
            <Header />
            <main>
                <Error/>
            </main>
            <Footer/>
        </div>
    )
}

export default ErrorPage;