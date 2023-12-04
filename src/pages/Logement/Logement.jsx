/*{Importe les élements à afficher }*/
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Caroussel from "../../components/Carroussel/Carroussel";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useParams } from "react-router-dom";
import "../../styles/Logement.css";
import LocationId from "../../components/LocationId/LocationId";


function Logement () { 
    /*{Récupère id de l'URL avec useParms}*/
    const {id} = useParams();
    /*{Trouve les données du logement dont l'id correspondant à celui de l'URL}*/
    const logement = logements.find((logement) => logement.id === id);
    /*{Condition d'affichage de la page d'erreur}*/
    if (!logement) {
        return <ErrorPage />;
    }

    return(
        <>
        <Header/>
        <main>
        <div>
            <Caroussel slides={logement?.pictures} />
            <div className="logement-tag-rate-host-container">   
                <div className="logement-tag-contaigner">
                    <LocationId title={logement?.title} location={logement?.location} />  
                    <Tag title={logement?.tags.map((tag) =>
                        <button className="tag"key={tag}>{tag}</button>
                    )}/>
                </div>
                <div className="rate-host-container">
                    <div className="host-picture-name">
                        <Host image={logement?.host.picture} name={logement?.host.name}/>
                    </div> 
                    <Rate rate={logement?.rating}/>
                </div>
            </div>
            <div className="collapse-descktop">
                <Collapse  title="Description" text={logement?.description}/>
                <Collapse title="Équipements" text={ logement?.equipments.map((equipment) => 
                    <ul className="collapse-equiment" key={equipment} >
                        <li>{equipment}</li>
                   </ul>
                )}/>
            </div>
        </div>
        </main>
        <Footer/>
        </>
        
    );

}

export default Logement;
