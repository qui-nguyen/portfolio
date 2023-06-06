import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import FormContactModal from "./modals/FormContactModal";

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleModalFormContact = () => {
        setOpen(!open);
    };

    return (
        <div id="navbar" className="navbar">
            <div className="navbar-container">
                <div className="personal-logo">
                    <Link to="/" ><div className="logo">QuiN.</div></Link>
                </div>

                <div className="navigation">
                    <a href="https://quinguyen.vercel.app/" target="_blank" rel="noopener noreferrer" className='animatedGradientText navigation__item'>
                        <h3>Nouvelle version</h3>
                    </a>
                    <a href="#presentation"><div className="navigation__item"><h3>Présentation</h3></div></a>
                    <a href="#projects"><div className="navigation__item"><h3>Projets</h3></div></a>
                    <a href="#formations"><div className="navigation__item"><h3>Formations</h3></div></a>
                    <a href="#experiences"><div className="navigation__item"><h3>Expériences</h3></div></a>
                    <a role="link" style={{ cursor: "pointer" }}><div onClick={toggleModalFormContact} className="navigation__item"><h3>Contact</h3></div></a>
                </div>
                <FormContactModal
                    open={open}
                    toggleModalFormContact={toggleModalFormContact}
                ></FormContactModal>
            </div>

            <NavbarMobile />

        </div>
    );
}

export default Header;