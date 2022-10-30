import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

import { RefObject, useRef } from "react";

const Header = () => {


    return (
        <div className="navbar">
            <div className="personal-logo">
                <Link to="/" ><div className="logo">QuiN.</div></Link>
            </div>

            <div className="navigation">
                <a href="#contacts"><div className="navigation__presentation"><h2>Présentation</h2></div></a>
                <a href="#projects"><div className="navigation__projects"><h2>Projets</h2></div></a>
                <a href="#formations"><div className="navigation__formations"><h2>Formations</h2></div></a>
                <a href="#experiences"><div className="navigation__experiences"><h2>Expériences</h2></div></a>
                <a href="#jumbotron"><div className="navigation__contacts"><h2>Contacts</h2></div></a>
            </div>

            <NavbarMobile />

        </div>
    );
}

export default Header;