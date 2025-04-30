import "../css/page_error.css";
import {useRouteError} from "react-router-dom";
import {Navbar} from "./Navbar.jsx";
import {styles} from "../css/styles.js";

export function PageError() {
    const error = useRouteError()
    return <div className="page_error" style={{...styles.containerHome}}>
        <Navbar />
        <p className="title">Une erreur s'est produite</p>
        <p className="detail">{error?.error?.toString() ?? error?.toString()}</p>
    </div>
}