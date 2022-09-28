import portrait from '../../assets/images/Portrait_Qui_4x4_smaller.jpg';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Presentation = () => {
    return (
        <div className="wrapper">
            <div className="presentation">
                <div className="presentation__img">
                    <img src={ portrait } alt="portrait-Qui-N." />
                </div>

                <div className="presentation__title typing">Bonjour, je m'appelle Thanh Qui</div>

                <div className="presentation__sub-title">

                    <p><RiDoubleQuotesL className="quote-icon" />
                        Je suis une jeune développeuse Full Stack web et mobile. Je suis capable de développer des applications web monopage et de celles mobiles en utilisant des technologies de la dernière génération.
                        Curieuse, rigoureuse et polyvalente, je cherche une opportunité de stage ou d'emploi dans ce domaine informatique
                        <RiDoubleQuotesR className="quote-icon" />
                    </p>
                </div>

                <div className="presentation__author">-Qui Nguyen Developpeuse Fullstack JS</div>
            </div>
        </div>
    )
}

export default Presentation;