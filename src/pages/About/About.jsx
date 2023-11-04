import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import bannerAbout from "../../assets/bannerAbout.png";
import Collapse from "../../components/Collapse/Collapse";
import collapseAbout from "../../data/collapseAbout.json";




function About(){
    return(
        <>
        <Header />
            <main>
                <Banner image={bannerAbout}/>
                {collapseAbout.map((collapse)=>
                <Collapse collaspe={collapse} key={collapse.id} /> 
                )}
            </main>
        <Footer/>
        </>   
    )
}

export default About;