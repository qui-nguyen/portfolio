interface IProps {
    name: string;
    img: string;
    desc: string;
    link: string;
    nameLink: string
}

const CardProject = ({ name, img, desc, link, nameLink }: IProps) => {
    return (
        <div className="card-project">
            <div className="box">
                <div className="box__header">
                    <div className="title">{name}</div>
                </div>
                <div className="box__content">
                    <div className="img"><img src={img} alt="" /></div>

                    <div className="description"><p>{desc}</p></div>

                    <a href={link} target="blank">
                        <div className="btn">{nameLink}
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default CardProject;