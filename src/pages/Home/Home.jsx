import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"

function Home() {
    return(
        <div>
            <Header />
            <h1>Home</h1>
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

export default Home