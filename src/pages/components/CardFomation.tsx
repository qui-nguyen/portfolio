interface IProps {
    domain: string;
    schoolName: string;
    img: string;
    desc: string;
    year: string;
    order: number
}

const CardFormation = ({ domain, schoolName, img, desc, year, order }: IProps) => {
    let styleOrder;

    order % 2 === 0 ? styleOrder = 1 : styleOrder = 0;

    return (
        <div className="card-formation">
            <div className={order % 2 === 0 ? "box" : "box box--colored"}>
                <div className={order % 2 === 0 ? "box__img box__img--right" : "box__img box__img--left"}>
                    <div className="img"><img src={img} alt="" /></div>
                </div>
                <div className={order % 2 === 0 ? "box__content box__content--left" : "box__content box__content--right"}>
                    <div className="content-container">
                        <div className="title-1"><h1>{year}</h1></div>
                        <div className="title-2"><h1>{domain}</h1></div>
                        <div className="sub-title"><h2>{schoolName}</h2></div>
                        <div className="description"><p>{desc}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFormation;