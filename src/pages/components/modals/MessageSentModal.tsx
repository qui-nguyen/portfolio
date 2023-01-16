import { HiX } from "react-icons/hi";

interface Props {
    isVisible: boolean;
    toggleModalMessageSent: () => void;
}

const Modal = ({ isVisible, toggleModalMessageSent }: Props) => {
    if (!isVisible) return null;

    return (
        <div className="message-sent-modal" >
            <div className="box">
                <div className="box__close">
                    <div onClick={toggleModalMessageSent}>
                        <HiX style={{ color: "#fff", width: "3rem", height: "3rem" }} />
                    </div>
                </div>
                <div className="box__text">
                    <h2>Message envoyé ! </h2><br />
                    <h2>Je vous réponderai plus rapide possible</h2><br />
                    <h2>A très bientôt !</h2>
                </div>

            </div>

        </div>
    )
}

export default Modal;