import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import bannerHome from "../../assets/bannerHome.png";
import logements from "../../data/logements.json";
import "../../styles/Home.css";


function Home() {
    return(
        <> 
            <div>
                <Header />
            </div>
            <main>
                <Banner image={bannerHome} texte= "Chez vous, partout et ailleurs"/>
                <div className="cards">
                    {logements.map((logement)=>
                        <Card logement={logement} key={logement.id} /> 
                    )} 
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;