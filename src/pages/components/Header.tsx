import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import FormContactModal from "./modals/FormContactModal";

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleModalFormContact = () => {
        setOpen(!open);
    }

    return (
        <div id="navbar" className="navbar">
            <div className="navbar-container">
                <div className="personal-logo">
                    <Link to="/" ><div className="logo">QuiN.</div></Link>
                </div>

                <div className="navigation">
                    <a href="#presentation"><div className="navigation__item"><h2>Présentation</h2></div></a>
                    <a href="#projects"><div className="navigation__item"><h2>Projets</h2></div></a>
                    <a href="#formations"><div className="navigation__item"><h2>Formations</h2></div></a>
                    <a href="#experiences"><div className="navigation__item"><h2>Expériences</h2></div></a>
                    <a role="link" aria-disabled="true"><div onClick={toggleModalFormContact} className="navigation__item"><h2>Contact</h2></div></a>
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