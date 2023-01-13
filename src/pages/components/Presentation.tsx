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
                        Je suis actuellement en stage de 6 mois en tant que développeur junior en front-end dans un studio international spécialisé dans le développement de sites web.&nbsp;
                        Au cours de cette expérience, j'ai pu mettre en pratique mes connaissances en programmation HTML, CSS et JavaScript, ainsi que mes compétences en utilisation de frameworks tels que React.&nbsp;
                        J'ai également eu l'opportunité de travailler avec une équipe internationale, ce qui m'a permis de développer de nouvelles compétences.
                    </p>
                    <p>
                        Motivée à poursuivre mon développement en tant que développeuse front-end, je suis à la recherche d'une opportunité de travail qui me permettra de mettre en pratique mes compétences et de continuer à apprendre et à me développer professionnellement.&nbsp;
                        Je suis persuadée que mon expérience de stage et mes compétences en développement web me préparent à relever de nouveaux défis et à apporter une contribution positive à une équipe de développement.
                        <RiDoubleQuotesR className="quote-icon" />
                    </p>
                </div>

                <div className="presentation__author">-Qui Nguyen Developpeuse Fullstack JS</div>
            </div>
        </div>
    )
}

export default Presentation;