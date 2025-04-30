import {Navbar} from "./Navbar.jsx";
import Home from "./Home.jsx";
import {styles} from "../css/styles.js";
import {Outlet} from "react-router-dom";

function Root() {
    return <>
        <Navbar />
        <div className="container" style={{...styles.containerHome}}>
            <Outlet />
        </div>
    </>
}

export default Root;