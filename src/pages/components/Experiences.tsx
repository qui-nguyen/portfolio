import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import experiencesData from "../data/experiencesData.json";


// const experiencesData: { domain: string, companyName: string, companyAdress: string, position: string, desc: string[], date: string, imgIcon: string }[] = [
//     {
//         domain: "Front-end", companyName: "KodKodKodStudio", companyAdress: "Lyon-France", position: "Stage",
//         desc: ["•	Refonte tous les sites web de l'entreprise (8 pages)",
//             "•	Mettre en place de nouveaux formulaires de contact pour améliorer la communication avec les clients",
//             "•	Maintenir les sites Web de clients côté front-end.",
//             "•	Améliorer la partie front-end d'une application web pour rendre l'interface utilisateur plus intuitive et facile à utiliser."],
//         date: "09/2022-03/2023",
//         imgIcon: "/experiences/laptop.png"
//     },
//     {
//         domain: "", companyName: "La Capsule", companyAdress: "Lyon-France", position: "Teacher Assistant", desc: ["Aider les futurs développeurs en leur fournissant de l'aide sur place et à distance (déboguer leurs codes, expliquer à nouveau les concepts vus pendant la formation, etc.)"], date: "10-11/2022", imgIcon: "/experiences/laptop.png"
//     },
//     {
//         domain: "", companyName: "Sushishop", companyAdress: "Lyon-France", position: "Sushiman", desc: ["Préparation des recettes japonaises en tant que sushiman confirmé"], date: "2020-2022", imgIcon: "/experiences/kawaii-sushi.png"
//     },
//     {
//         domain: "Biochimie", companyName: "IBCP", companyAdress: "Lyon-France", position: "Stage", desc: ["Production et purification de la protéine (de laminine LG4/5)"], date: "01-06/2017", imgIcon: "/experiences/microscope.png"
//     }
// ]

const Experiences = () => {
    return (
        <>
            <div id="experiences" className="experiences">
                <div className="experiences__title"><h1>Mes expériences</h1></div>
                <div className="experiences__box">

                    <VerticalTimeline>

                        {experiencesData.map((experience, index) => {
                            let icon = <img src={experience.imgIcon} alt={experience.imgIcon} style={{ width: "85%", height: "auto", marginLeft: "7.5%", marginTop: "7.5%" }} />;
                            return (
                                <VerticalTimelineElement
                                    key={`${index}${experience.position}`}
                                    className="vertical-timeline-element--work"
                                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid #CFA616' }}
                                    // lineColor="timeline"
                                    dateClassName="experience-date"
                                    date={experience.date}
                                    iconStyle={{ background: '#000', color: '#FFF' }}
                                    icon={icon}
                                >
                                    <div className="box-content">
                                        <h2 className="vertical-timeline-element-title">{experience.position}{experience.domain ? ` - ${experience.domain}` : ''}</h2>
                                        <h3 className="vertical-timeline-element-subtitle">{experience.companyName}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">{experience.companyAdress}</h4>
                                        {(experience.desc).map((d, i) => {
                                            return <p key={`${i}${d}`}>{d}</p>
                                        })}
                                    </div>

                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default Experiences;