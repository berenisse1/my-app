import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

function Header(){
    return(
        <header>
            <div>
                <img className="logo" src={logo} alt="logo agence kasa" />
            </div>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>

        </header>
    )
}

export default Header 