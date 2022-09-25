
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);

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
                <button onClick={() => visibleMenu ? setVisibleMenu(false) : setVisibleMenu(true)} className="hamburger">
                {visibleMenu ?  <HiX className={`menu-logo`} /> : <HiMenu className={`menu-logo`} />}
                </button>
                {/* <div className={`hamburger-navigation ${open}`}> */}
                <div className={ `hamburger-navigation ${ visibleMenu ? "hamburger-navigation--open" : ""}` }>
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