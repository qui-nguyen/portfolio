import { HiX } from "react-icons/hi";

interface IProps {
    isVisible: boolean;
    toggleModal: any;
}

const Modal = ({ isVisible, toggleModal }: IProps) => {

    return (
        isVisible ?
            <div className="modal" >
                <div className="modal__close">
                    <h3>Fermer</h3>
                    <button onClick={toggleModal}>
                        <HiX style={{ color: "#272729", width: "30px", height: "30px" }} />
                    </button>
                </div>
                <div className="modal__text">
                    <h1>Message envoyé ! </h1><br />
                    <h1>Je vous réponderai plus rapide possible</h1><br />
                    <h1>A très bientôt !</h1>
                </div>
            </div>
            : null
    )

}

export default Modal;