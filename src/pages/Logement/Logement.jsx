import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag/Tag";

function Logement () { 
    
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);
    return(
        <>
        <Header/>
        <main>
        <div>
            <Tag title={logement?.tags}/>
            <Collapse  title="Description" text={logement?.description} />
            <Collapse  title= "Équipements" />
            { logement?.equipments.map((equipment) => 
            <ul key={equipment}>
                <li>{equipment}</li>
            </ul>
            )};
        </div>
        </main>
        <Footer/>
        </>
        
    )

}

export default Logement;

