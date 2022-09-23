import '../../assets/styles/components/header.scss';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const Header = () => {
    return (
        <div className="navbar">
            <div className="personal-logo">
                <Link to="/" ><div className="logo">QuiN.</div></Link>
            </div>

            <div className="navigation">
                <div className="presentation"><h2>Présentation</h2></div>
                <div className="projects">
                    <Link to="/projects" ><h2>Mes projets</h2></Link>
                </div>
                <div className="formations"><h2>Mes formations</h2></div>
                <div className="contacts"><h2>Contacts</h2></div>
            </div>

            <div className="navigation--mobile">
                <button className="hamburger">
                    <HiMenu className="menu-logo" />
                </button>
                <div className="hamburger-navigation">
                    <div className="presentation"><h2>Présentation</h2></div>
                    <div className="projects">
                        <Link to="/projects" ><h2>Mes projets</h2></Link>
                    </div>
                    <div className="formations"><h2>Mes formations</h2></div>
                    <div className="contacts"><h2>Contacts</h2></div>
                </div>
            </div>

        </div>
    );
}

export default Header;