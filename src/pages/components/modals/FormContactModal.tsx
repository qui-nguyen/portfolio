import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import MessageSentModal from './MessageSentModal';
import { HiX } from "react-icons/hi";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env

interface Props {
    open: boolean;
    toggleModalFormContact: () => void;
}

const FormContactModal = ({ open, toggleModalFormContact }: Props) => {

    // Inputs
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const messageInput = React.useRef<HTMLTextAreaElement>(null);
    // Form
    const form = React.useRef<HTMLFormElement>(null);
    // Modal
    const [isVisible, setIsVisible] = useState<boolean>(false);
    // Status send message
    const [success, setSuccess] = useState<boolean>(false);

    // Toogle modal MessageSent
    const toggleModalMessageSent = () => {
        setIsVisible(prev => !isVisible);
        if(isVisible) toggleModalFormContact();
    }
    // Submit
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // if (form.current) {
        //     emailjs.sendForm(REACT_APP_SERVICE_ID!, REACT_APP_TEMPLATE_ID!, form.current, REACT_APP_PUBLIC_KEY)
        //         .then((result) => {
        //             console.log(result.text);
        //             result.status === 200 && setSuccess(true);
        //         }, (error) => {
        //             console.log(error.text);
        //         });
        // };
        setSuccess(true);
    }

    useEffect(() => {
        if (success) {
            // Reset input with useState
            setName('');
            setEmail('');

            // Reset messages with useRef
            if (messageInput.current) {
                messageInput.current.value = '';
            }
            // Reset status
            setSuccess(false);
            // Show modal
            toggleModalMessageSent();
        }
    }, [success])

    if (!open) return null;
    else if (open && !isVisible) {
        return (
            <>
                <div id="contact" className="form-contact">
                    <div className="box">
                        <div
                            className="button-close"
                            onClick={toggleModalFormContact} >
                            <HiX style={{ color: "#272729", width: "3rem", height: "3rem" }} />
                        </div>
                        <div className="box__title"><h1>Contact</h1></div>
                        <div className="box__form">
                            <form className="form" ref={form} onSubmit={handleSubmit}>
                                <h3 className="form__tilte">On discute ?</h3>
                                <div className="form__content">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="user_name"
                                            placeholder="Nom"
                                            onChange={event => setName(event.target.value)}
                                            value={name}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="user_email"
                                            placeholder="Email"
                                            onChange={event => setEmail(event.target.value)}
                                            value={email}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            ref={messageInput}
                                            className="form-control"
                                            id="input-message"
                                            name="user_message"
                                            placeholder="Message"
                                            rows={5}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form__btn">
                                    <button type="submit">
                                        <h3>Envoyer</h3>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <MessageSentModal isVisible={isVisible} toggleModalMessageSent={toggleModalMessageSent}></MessageSentModal>
    }
}

export default FormContactModal;