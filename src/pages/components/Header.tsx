import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

const Header = () => {

    return (
        <div className="navbar">
            <div className="personal-logo">
                <Link to="/" ><div className="logo">QuiN.</div></Link>
            </div>

            <div className="navigation">
                <a href="#social-network"><div className="navigation__item"><h2>Présentation</h2></div></a>
                <a href="#projects"><div className="navigation__item"><h2>Projets</h2></div></a>
                <a href="#formations"><div className="navigation__item"><h2>Formations</h2></div></a>
                <a href="#experiences"><div className="navigation__item"><h2>Expériences</h2></div></a>
                <a href="#contact"><div className="navigation__item"><h2>Contact</h2></div></a>
            </div>

            <NavbarMobile />

        </div>
    );
}

export default Header;