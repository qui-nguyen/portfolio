import { useState } from "react";
import FormContactModal from "./modals/FormContactModal";

const Contact = () => {
    // FormContactModal
    const [open, setOpen] = useState(false);

    const toggleModalFormContact = () => {
        setOpen(!open)
    }
    return (
    <>
        <div className='contact-button'>
            <img src="/icon-communication.png" alt="icon communication" style={{ height: "4rem", width: "auto" }} />
            <div><a className="social-network-icon" href="https://github.com/qui-nguyen"><img src="/icon-github.png" alt="icon-gtihub" style={{ height: "3rem", width: "auto" }} /></a></div>
            <div><a className="social-network-icon" href="https://linkedin.com/in/thanh-qui-nguyen"><img src="/icon-linkedin.svg" alt="icon-linkedin" style={{ height: "3rem", width: "auto" }} /></a></div>
            <div onClick={toggleModalFormContact}><a className="social-network-icon" role="link" aria-disabled="true"><img src="/icon-message.png" alt="icon-message" style={{ height: "2.5rem", width: "auto" }} /></a></div>
        </div>
        <FormContactModal
            open={open}
            toggleModalFormContact={toggleModalFormContact}
        ></FormContactModal>
    </>
    )
}

export default Contact;