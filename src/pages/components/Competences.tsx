import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

const Competence = () => {
    const logoReact: string = require("../../assets/images/logo-react-animated.svg").default;

    return (
        <>
            <div className="competences">
                <div className="competences__title"><h1>Mes compétences</h1></div>
                <div className="competences__skills">
                        <FaHtml5 style={{ color: "#E44D26" }} />
                        <FaCss3Alt style={{ color: "#1172B8" }} />
                        <IoLogoJavascript style={{ color: "#FFCA28", backgroundColor:"#3E3E3E", border:"none" }} />
                        <img src={logoReact} alt="logo-react" />
                        <SiRedux style={{ color: "#764ABC" }} />
                        <img src="/python.svg" alt="logo-python" />                    
                </div>
            </div>

        </>
    )
}

export default Competence;