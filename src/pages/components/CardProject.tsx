interface IProps {
    name: string;
    img: string;
    desc: string;
    link: string;
    nameLink: string;
    logo: string
}

const CardProject = ({ name, img, desc, link, nameLink, logo }: IProps) => {
    return (
        <div className="card-project">
            <div className="box">
                <div className="box__content">
                    <div className="img"><img src={img} alt="" /></div>
                    <div className="title"><h3>{name}</h3></div>
                    <div className="logo"><img src={logo} alt={logo} /></div>
                    <div className="description"><p>{desc}</p></div>
                    <a href={link} target="blank">
                        <div className="btn">{nameLink}</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardProject;