import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Caroussel from "../../components/Carroussel/Carroussel";


function Logement () { 
    
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);
 
    return(
        <>
        <Header/>
        <main>
        <div>
            <Caroussel slides={logement?.pictures} title={logement?.title}
            location={logement?.location} />
            <Host image={logement?.host.picture} name={logement?.host.name}/>
            <Tag title={logement?.tags}/>
            <Rate rate={logement?.rating}/> 
            <Collapse  title="Description" text={logement?.description}/>
            <Collapse title="Équipements" text={ logement?.equipments.map((equipment) => 
            <ul className="collapse-text" key={equipment} >
                <li>{equipment}</li>
            </ul>
            )}/>
           
        </div>
        </main>
        <Footer/>
        </>
        
    );

}

export default Logement;
