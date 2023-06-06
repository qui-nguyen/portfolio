import portrait from '../../assets/images/Portrait_Qui_4x4_smaller.jpg';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Presentation = () => {
    return (
        <div id="presentation" className="wrapper">
            <div className="fixed-background">
                <img src="/jumbotron_bg.jpg" alt="" />
            </div>
            <div className="presentation">
                <div className="presentation__img">
                    <img src={portrait} alt="portrait-Qui-N." />
                </div>

                <div className="presentation__title typing">Bonjour, je suis Thanh Qui</div>

                <div className="presentation__sub-title">
                    <p>
                        <RiDoubleQuotesL className="quote-icon" />
                        Motivée à poursuivre mon développement en tant que développeuse front-end, je suis à la recherche d'une opportunité de travail qui me permettra de mettre en pratique mes compétences  et de continuer à apprendre et à me développer professionnellement.
                        <RiDoubleQuotesR className="quote-icon" />
                    </p>
                    <p>
                    </p>
                </div>

                <div className="presentation__author">-Qui Nguyen Developpeuse Fullstack JS</div>
            </div>
        </div>
    )
}

export default Presentation;