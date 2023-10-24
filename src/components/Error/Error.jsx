import { Link } from "react-router-dom"

function Error () {
    return(
        <div>
            <p className="error-code">404</p>
            <p className="error-text">
                Oups! La page que vous demandez n'existe pas
            </p>
            <nav>
                <Link to="/">Retournez sur la page d'acceuil</Link>
            </nav>
        </div>
        
    );
}

export default Error;
