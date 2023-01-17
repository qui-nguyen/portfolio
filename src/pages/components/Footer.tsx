const Footer = () => {

    const styleFooter: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0A0F1B"
    };

    const styleHr: React.CSSProperties = {
        width: "100%",
        maxWidth: "1180px",
    }

    return (
        <div id="footer" style={styleFooter}>
            <hr style={styleHr} />
            <p>© Qui Nguyen 2023</p>
        </div>
    )
}

export default Footer;