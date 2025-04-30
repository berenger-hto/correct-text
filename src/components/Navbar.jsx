import {NavLink} from "react-router-dom";
import "../css/sidebar.css"; 

export function Navbar() {
    return <div className="navbar">
        <div className="logo">
            <i className='bx bx-transfer-alt'></i>
        </div>
        <ul>
            <li>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/correct">Corriger un texte</NavLink>
            </li>
            <li>
                <NavLink to="/resum">Résumer un texte</NavLink>
            </li>
        </ul>
    </div>
}

