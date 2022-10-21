import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IProps {
    domain: string;
    schoolName: string;
    img: string;
    desc: string;
    year: string;
    order: number
}

const CardFormation = ({ domain, schoolName, img, desc, year, order }: IProps) => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="card-formation">
            <div className={order % 2 === 0 ? "box" : "box box--colored"}>
                <div className={order % 2 === 0 ? "box__img box__img--right" : "box__img box__img--left"}>
                    <div className="img" data-aos="fade-up" data-aos-duration="500" ><img src={img} alt="" /></div>
                </div>
                <div className={order % 2 === 0 ? "box__content box__content--left" : "box__content box__content--right"}>
                    <div className="title"><h1>{year}</h1></div>
                    <div className="content-container" data-aos="fade-down" data-aos-duration="500">
                        <div className="title"><h1>{domain}</h1></div>
                        <div className="sub-title"><h2>{schoolName}</h2></div>
                        <div className="description"><p>{desc}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFormation;