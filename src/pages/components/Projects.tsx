import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { useMediaQuery } from "react-responsive";
import CardProject from "./CardProject";

import projectsData from "../data/projectsData.json";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);


const Projects = () => {

    const isDesktop = useMediaQuery({
        query: "(min-width: 1600px)"
    });

    const isHorizontal = useMediaQuery({
        query: "(min-width: 1028px)"
    });

    const isTablet = useMediaQuery({
        query: "(min-width: 768px)"
    });

    // const isMobile = useMediaQuery({
    //   query: "(min-width: 640px)"
    // });

    // const isPortrait = useMediaQuery({
    //   query: "(orientation: portrait)"
    // });

    // const isRetina = useMediaQuery({
    //   query: "(min-resolution: 300dpi)"
    // });
    const styleLink = {
        height: "8rem",
        display: "block"
    }

    return (
        <>
            <div id="projects" className="projects">
                <div className="projects__title"><h1>Mes projets</h1></div>
                <div className="projects__swipper">
                    <Swiper
                        slidesPerView={isDesktop || isHorizontal ? 3 : (isTablet ? 2 : 1)}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {projectsData.map((project, index) => {
                            return (
                                <SwiperSlide
                                    key={`${index}${project.name}`}>
                                    <CardProject
                                        name={project.name}
                                        img={project.img}
                                        desc={project.desc}
                                        link={project.link}
                                        nameLink={project.nameLink}
                                        logo={project.logo}
                                        techno={project.techno}
                                    ></CardProject>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="projects__btns"><h3>En savoir plus</h3></div>
                <div className="projects__btns">
                    <a href="https://github.com/qui-nguyen" style={styleLink}>
                        <img src="/icon-github.png" alt="icon-gtihub" style={{ height: "5rem", width: "auto", marginRight: "1rem" }} />
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLb3_yu1WCP1xB91Gt7dnOgrSm7kzJZ-D1" style={styleLink}>
                        <img src="projects/icon-youtube.png" alt="icon-youtube" style={{ height: "5rem", width: "auto" }} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects;