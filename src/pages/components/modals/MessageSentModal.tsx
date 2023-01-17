import { HiX } from "react-icons/hi";

interface Props {
    isVisible: boolean | null;
    closeModalMessageSent: () => void;
}

const MessageSentModal = ({ isVisible, closeModalMessageSent }: Props) => {
    if (isVisible === false || isVisible === null) return null;

    return (
        <div className="message-sent-modal" >
            <div className="box">
                <img src="/icon-message-sent.svg" alt="icon message sent" style={{ height: "7rem", width: "auto" }} />
                <div className="box__close">
                    <div onClick={closeModalMessageSent}>
                        <HiX style={{ color: "#fff", width: "3rem", height: "3rem" }} />
                    </div>
                </div>
                <div className="box__text">
                    <h2>Message envoyé ! </h2><br />
                    <p>Je vous réponderai plus rapide possible</p><br />
                    <p>A très bientôt !</p>
                </div>
            </div>
        </div>
    )
}

export default MessageSentModal;