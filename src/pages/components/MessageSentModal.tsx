import { HiX } from "react-icons/hi";

interface Props {
    isVisible: boolean;
    toggleModal: () => void;
}

const Modal = ({ isVisible, toggleModal }: Props) => {
    if (!isVisible) return null;

    return (
        <div className="modal" >
            <div className="modal__close">
                <h3>Fermer</h3>
                <button onClick={toggleModal}>
                    <HiX style={{ color: "#272729", width: "3rem", height: "3rem" }} />
                </button>
            </div>
            <div className="modal__text">
                <h2>Message envoyé ! </h2><br />
                <h2>Je vous réponderai plus rapide possible</h2><br />
                <h2>A très bientôt !</h2>
            </div>
        </div>
    )

}

export default Modal;