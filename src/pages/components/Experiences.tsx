import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const experiencesData: { domain: string, companyName: string, companyAdress: string, position: string, desc: string, date: string, imgIcon: string }[] = [
    {
        domain: "", companyName: "La Capsule", companyAdress: "Lyon-France", position: "Teacher Assistant", desc: "Donner les aides aux futurs développeurs sur place et à distance (débugger leurs codes, réexpliquer les concepts vus pendant la formation...)", date: "10/2022", imgIcon: "/experiences/laptop.png"
    },
    {
        domain: "Front-end", companyName: "KodKodKodStudio", companyAdress: "Lyon-France", position: "Stage", desc: "Refonte tous les sites web de KodKodKod Studio (ex: https://kodkodkod.studio/fr/)", date: "09/2022", imgIcon: "/experiences/laptop.png"
    },
    {
        domain: "", companyName: "Sushishop", companyAdress: "Lyon-France", position: "Sushiman", desc: "Préparation des recettes japonaises en tant que sushiman confirmé", date: "2020-2022", imgIcon: "/experiences/kawaii-sushi.png"
    },
    {
        domain: "Biochimie", companyName: "IBCP", companyAdress: "Lyon-France", position: "Stage", desc: "Production et purification de la protéine (de laminine LG4/5)", date: "2017", imgIcon: "/experiences/microscope.png"
    }
]

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
                                        <h3 className="vertical-timeline-element-subtitle">{experience.companyAdress}</h3>
                                        <p>{experience.desc}</p>
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