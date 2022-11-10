import { HiX } from "react-icons/hi";

interface IProps {
    isVisible: boolean;
    toggleModal: any;
}

const Modal = ({ isVisible, toggleModal }: IProps) => {

    return (
    //    isVisible ?
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
        //    : null
    )

}

export default Modal;