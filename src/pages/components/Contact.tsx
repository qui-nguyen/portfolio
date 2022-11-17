import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import Modal from './Modal';

const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY} = process.env

const Contact = () => {
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
    // Toogle modal
    const toggleModal = () => {
        setIsVisible(prev => !isVisible);
    }
    // Submit
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm(REACT_APP_SERVICE_ID!, REACT_APP_TEMPLATE_ID!, form.current, REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    result.status === 200 && setSuccess(true);
                }, (error) => {
                    console.log(error.text);
                });
        };
    }

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
        toggleModal();
    }

    return (
        <>
            <div id="contact" className="contact">
                <div className="contact__title"><h1>Contact</h1></div>
                <div className="contact__form">
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
                                    rows={10}
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

            <Modal isVisible={isVisible} toggleModal={toggleModal}></Modal>
        </>
    )

}

export default Contact;