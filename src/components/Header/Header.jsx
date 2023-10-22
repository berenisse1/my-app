import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>

        </header>
    )
}

export default Header 