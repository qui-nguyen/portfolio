import CardFormation from './CardFomation';

const formationsData: { domain: string, schoolName: string, img: string, desc: string, year: string }[] = [
    {
        domain: "FullStack JS",
        schoolName: "La Capsule",
        img: "/formations/lacapsule-batch55.jpg",
        desc: "",
        year: "2022"
    },
    {
        domain: "Data Analyst",
        schoolName: "Openclassrooms",
        img: "/formations/m2-IBCP.jpg",
        desc: "",
        year: "2021 - 2022"
    },     
    {
        domain: "FullStack JS",
        schoolName: "La Capsule",
        img: "/formations/lacapsule-batch55.jpg",
        desc: "",
        year: "2022"
    },
    {
        domain: "Data Analyst",
        schoolName: "Openclassrooms",
        img: "/formations/m2-IBCP.jpg",
        desc: "",
        year: "2021 - 2022"
    }
];

const Formations = () => {
    return (
        <>
            <div id="formations" className="formations">
                <div className="formations__title"><h1>Mes formations</h1></div>
                <div className="formations__cards">
                    {formationsData.map((formation, index) => {
                        return (
                            <CardFormation
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