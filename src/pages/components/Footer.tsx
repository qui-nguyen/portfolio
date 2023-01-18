import { useState } from "react";
import FormContactModal from "./modals/FormContactModal";

const Footer = () => {
    // FormContactModal
    const [open, setOpen] = useState(false);

    const toggleModalFormContact = () => {
        setOpen(!open)
    }

    return (
        <div id="footer" style={styleFooter}>
            <hr style={styleHr} />
            <div style={styleContact}>
                <div><a className="social-network-icon" href="https://github.com/qui-nguyen"><img src="/icon-github.png" alt="icon-gtihub" style={styleBtn} /></a></div>
                <div onClick={toggleModalFormContact} style={{ cursor: "pointer" }}><a className="social-network-icon" role="link"><img src="/icon-message.png" alt="icon-message" style={styleBtn} /></a></div>
                <div><a className="social-network-icon" href="https://linkedin.com/in/thanh-qui-nguyen"><img src="/icon-linkedin.svg" alt="icon-linkedin" style={styleBtn} /></a></div>
            </div>
            <p>© Qui Nguyen 2023</p>
            <FormContactModal
                open={open}
                toggleModalFormContact={toggleModalFormContact}
            ></FormContactModal>
        </div>
    )
}

export default Footer;

const styleFooter: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F1B"
};

const styleHr: React.CSSProperties = {
    width: "100%",
    maxWidth: "1180px",
};

const styleContact: React.CSSProperties = {
    marginTop: "20px",
    width: "100%",
    maxWidth: "1180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px"
};

const styleBtn: React.CSSProperties = {
    width: "auto",
    height: "3rem"
};
