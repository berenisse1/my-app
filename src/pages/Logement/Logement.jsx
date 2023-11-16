import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Caroussel from "../../components/Carroussel/Carroussel";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Logement () { 
    
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);
    (!logement) && <Link to={`/"*"/${<ErrorPage />}`}></Link>;

    return(
        <>
        <Header/>
        <main>
        <div>
            <Caroussel slides={logement?.pictures} />
            <div className="logement-tag-rate-host-container">   
                <div className="logement-tag-contaigner">
                    <div className="logement-text">
                        <p className="logement-title">{logement?.title}</p>
                        <p className="logement-location" >{logement?.location} </p>
                   </div>  
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
                    <ul className="collapse-text" key={equipment} >
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
