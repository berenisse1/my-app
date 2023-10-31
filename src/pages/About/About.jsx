import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import bannerAbout from "../../assets/bannerAbout.png"


function About(){
    return(
        <>
        <h1>About</h1>
        <Header />
            <main>
                <Banner image={bannerAbout}/>
            </main>
        <Footer/>
        </>
        
    )
}

export default About