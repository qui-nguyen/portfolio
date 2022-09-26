import urlQuoteOpen from '../../assets/images/quote-pink-open.png';
import urlQuoteClose from '../../assets/images/quote-pink-close.png';

const Presentation = () => {
    return (
        <div className="wrapper">
            <div className="presentation">
                <div className="presentation__img"></div>

                <div className="presentation__title">
                    <div className="quote-icon"></div>
                    <div className="text"><h2>Bonjour, je m'appelle Thanh Qui</h2></div>
                    <div className="quote-icon"></div>
                </div>

                <div className="presentation__sub-title">
                    <p>Je suis une jeune développeuse Full Stack web et mobile. Je suis capable de développer des applications web monopage et de celles mobiles en utilisant des technologies de la dernière génération. Curieuse, rigoureuse et polyvalente, je cherche une opportunité de stage ou d'emploi dans ce domaine informatique</p>
                </div>

                <div className="presentation__author">-Qui Nguyen Developpeuse Fullstack JS</div>
            </div>
        </div>
    )
}

export default Presentation;