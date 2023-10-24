import React from "react";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Error() {
    return(
        <div>
            <Header />
            <main>
                <Banner/>
                <div>
                    <Card/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Error;