import logo from '../../assets/logo.png';
import '../../styles/Header.css';
import { Link } from "react-router-dom";


function Header(){
    return(
        <>
            <header>
                <div>
                    <img className="logo" src={logo} alt="logo agence kasa" />
                </div>
                <nav>
                    <Link className="link-home" to="/">Acceuil</Link>
                    <Link className="link-about" to="/a-propos">A propos</Link>
                </nav>
           </header>
        </>
        
    );
}

export default Header; 