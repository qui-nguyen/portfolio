import { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import Recaptcha from '../../capsules/Recaptcha';
import MessageSentModal from './MessageSentModal';
import ErrorSendFormModal from './ErrorSendFormModal';
import { HiX } from "react-icons/hi";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env

interface Props {
    open: boolean;
    toggleModalFormContact: () => void;
}

const FormContactModal = ({ open, toggleModalFormContact }: Props) => {

    // Recaptcha
    const [tokenRecaptcha, setTokenRecaptcha] = useState<string | null>(null);
    const [resetRecaptcha, setResetRecaptcha] = useState<boolean>(false);

    // Inputs
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const messageInput = useRef<HTMLTextAreaElement>(null);
    // Form
    const form = useRef<HTMLFormElement>(null);

    // State of form => init or sent or error
    const [success, setSuccess] = useState<boolean | null>(null);

    const handlerCheckRecaptcha = (token: string | null) => {
        if (token) {
            setTokenRecaptcha(token);
        };
    };

    // Close modal MessageSent
    const closeModalMessageSent = () => {
        toggleModalFormContact();
        setSuccess(null);
    };

    // Close modal ErrorSendForm
    const closeModalErrorSendForm = () => {
        toggleModalFormContact();
        setSuccess(null);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (tokenRecaptcha != null) {
            if (form.current && tokenRecaptcha != null) {
                emailjs.sendForm(REACT_APP_SERVICE_ID!, REACT_APP_TEMPLATE_ID!, form.current, REACT_APP_PUBLIC_KEY)
                    .then((result) => {
                        console.log(result.text);
                        result.status === 200 && setSuccess(true);
                    }, (error) => {
                        console.log(error.text);
                        setSuccess(false);
                    });
            };
            setResetRecaptcha(true);
            setTokenRecaptcha(null);
        };
    };

    useEffect(() => {
        // Reset input with useState
        setName('');
        setEmail('');
        // Reset messages with useRef
        if (messageInput.current) {
            messageInput.current.value = '';
        };
        // Reset recaptcha
        setResetRecaptcha(false);

        // setResetRe(false);
    }, [success]);

    return (
        <>
            <div id="contact" className="form-contact" style={(open && (success === null)) ? { "display": "" } : { "display": "none" }}>
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
                    <Recaptcha
                        reset={resetRecaptcha}
                        handlerCheckRecaptcha={handlerCheckRecaptcha}
                    ></Recaptcha>
                </div>
            </div>
            <MessageSentModal isVisible={success} closeModalMessageSent={closeModalMessageSent}></MessageSentModal>
            <ErrorSendFormModal notVisible={success} closeModalErrorSendForm={closeModalErrorSendForm}></ErrorSendFormModal>
        </>
    )
}

export default FormContactModal;