import CardFormation from './CardFomation';

import formationsData from "../data/formationsData.json";

const Formations = () => {
    return (
        <>
            <div id="formations" className="formations">
                <div className="formations__title"><h1>Mes formations</h1></div>
                <div className="formations__cards">
                    {formationsData.map((formation, index) => {
                        return (
                            <CardFormation
                                key={`${index}${formation.domain}`}
                                domain={formation.domain}
                                schoolName={formation.schoolName}
                                img={formation.img}
                                desc={formation.desc}
                                year={formation.year}
                                order={index + 1}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Formations;