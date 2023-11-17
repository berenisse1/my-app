import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import bannerAbout from "../../assets/bannerAbout.png";
import Collapse from "../../components/Collapse/Collapse";
import collapseAbout from "../../data/collapseAbout.json";
import "../../styles/About.css";




function About(){
    return(
        <>
        <Header />
            <main>
                <Banner image={bannerAbout}/>
                <div className="collapse-about">
                    {collapseAbout.map((collapse)=>
                        <Collapse title={collapse.title} text={collapse.text} key={collapse.id} /> 
                    )}
                </div>
                
            </main>
        <Footer/>
        </>   
    )
}

export default About;