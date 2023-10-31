import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";

function Logement () { 
    return(
        <>
        <Header/>
        <main>
            <div>
                <Collapse title="Équipements" text={logements.equipments} key= {logements.id} />
                <Collapse title="Description" text={logements.description} key= {logements.id} />
            </div>
        </main>
        <Footer/>
        </>
        
    )

}

export default Logement;