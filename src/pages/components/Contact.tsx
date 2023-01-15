import React, { useState } from "react";
import FormContactModal from "./FormContactModal";

import useOnClickOutside from "../hook/useOnClickOutside";

const Contact = () => {
    const [open, setOpen] = useState(false);

    const toggleModalFormContact = () => {
        setOpen(prev => !open)
    }

    return (<>
        <div className='contact-button'>
            <img src="/icon-communication.png" alt="icon communication" style={{ height: "4rem", width: "auto" }} />
            <div><a className="social-network-icon" href="https://github.com/qui-nguyen"><img src="/icon-github.png" alt="icon-gtihub" style={{ height: "3rem", width: "auto" }} /></a></div>
            <div><a className="social-network-icon" href="https://linkedin.com/in/thanh-qui-nguyen"><img src="/icon-linkedin.svg" alt="icon-linkedin" style={{ height: "3rem", width: "auto" }} /></a></div>
            <div onClick={toggleModalFormContact}><img src="/icon-message.png" alt="icon-message" style={{ height: "2.5rem", width: "auto" }} /></div>
        </div>
        <FormContactModal
            open={open}
            toggleModalFormContact={toggleModalFormContact}
        ></FormContactModal>
    </>


    )
}

export default Contact;