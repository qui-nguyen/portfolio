import { HiX } from "react-icons/hi";

interface Props {
    notVisible: boolean | null;
    closeModalErrorSendForm: () => void;
}

const ErrorSendFormModal = ({ notVisible, closeModalErrorSendForm }: Props) => {
    if (notVisible === true || notVisible === null) return null;

    return (
        <div className="error-sent-form-modal" >
            <div className="box">
                <div className="box__close">
                    <div onClick={closeModalErrorSendForm}>
                        <HiX style={{ color: "#fff", width: "3rem", height: "3rem" }} />
                    </div>
                </div>
                <div className="box__text">
                    <h2>Une erreur survenue ! </h2><br />
                    <p>Je vous remercie de me contacter directement par courriel (nguyenhtqui@gmail.com) ou sur LinkedIn. Je vous répondrai dans les plus brefs délais.</p><br />
                    <p>A très bientôt !</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorSendFormModal;