import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "8rem" }}>
            <a href="https://github.com/qui-nguyen">
                <FaGithubSquare style={{ fontSize: "5rem", color: "#171515", marginRight: "3rem" }} />
            </a>

            <a href="https://linkedin.com/in/thanh-qui-nguyen">
                <FaLinkedin style={{ fontSize: "5rem", color: "#0e76a8" }} />
            </a>
        </div>
    )
}

export default Contact;