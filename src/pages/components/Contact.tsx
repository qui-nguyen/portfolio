// import { FaGithubSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { Ri24HoursFill } from "react-icons/ri";

const styleLink = {
    height: "8rem",
    display: "block"
}

const styleDivParent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const Contact = () => {

    return (
        <div id="contacts" style={styleDivParent}>
            <div>
                <a href="https://github.com/qui-nguyen" style={styleLink}>
                    {/* <FaGithubSquare style={{ fontSize: "5rem", color: "#FFFFFF", marginRight: "3rem" }} /> */}
                    <img src="/icon-github.png" alt="icon-gtihub" style={{ height: "6rem", width: "auto", marginRight: "3rem" }} />
                </a>
            </div>

            <div>
                <a href="https://linkedin.com/in/thanh-qui-nguyen" style={styleLink}>
                    {/* <FaLinkedin style={{ fontSize: "5rem", color: "#0e76a8", backgroundColor:"#FFFFFF" }} /> */}
                    <img src="/icon-linkedin.png" alt="icon-linkedin" style={{ height: "6rem", width: "auto" }} />
                </a>
            </div>

        </div>
    )
}

export default Contact;