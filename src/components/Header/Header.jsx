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
                    <Link to="/">Acceuil</Link>
                    <Link to="/a-propos">A propos</Link>
                </nav>
           </header>
        </>
        
    );
}

export default Header; 