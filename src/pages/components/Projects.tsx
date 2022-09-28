import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import { useMediaQuery } from "react-responsive";

import CardProject from "./CardProject";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const projectsData: { name: string; img: string; desc: string; link: string, nameLink: string }[] = [
    {
        name: "everybuddy",
        img: "/ticketac.png",
        desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
        link: "https://github.com/qui-nguyen",
        nameLink: "Github"
    },
    {
        name: "test1",
        img: "/bikeshop.png",
        desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
        link: "",
        nameLink: "Github"
    },
    {
        name: "test2",
        img: "/weatherapp.png",
        desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
        link: "",
        nameLink: "Github"
    },
    {
        name: "test3",
        img: "/morningnews.png",
        desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
        link: "",
        nameLink: "Github"
    },
    {
        name: "test4",
        img: "/mymoviz.png",
        desc: "Application mobile qui permet de vous géolocaliser, de suivre l’historique de vos déplacements et de chatter avec l’ensemble des utilisateurs connectés à l’application.",
        link: "", nameLink: "Github"
    },
];


const Projects = () => {

      const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
    
      const isTablet = useMediaQuery({
        query: "(min-width: 768px)"
      });
    
      const isMobile = useMediaQuery({
        query: "(min-width: 640px)"
      });
    
      const isPortrait = useMediaQuery({
        query: "(orientation: portrait)"
      });
    
      const isRetina = useMediaQuery({
        query: "(min-resolution: 300dpi)"
      });
    
    return (
        <>
            <div className="projects">
                <div className="projects__title"><h1>Mes projets</h1></div>
                <div className="projects__swipper">
                    <Swiper
                        slidesPerView={isDesktop ? 3 : (isTablet ? 2 : 1)}
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
                        {projectsData.map((project) => {
                            return (
                                <SwiperSlide>
                                    <CardProject
                                        key={project.name}
                                        name={project.name}
                                        img={project.img}
                                        desc={project.desc}
                                        link={project.link}
                                        nameLink={project.nameLink}
                                    ></CardProject>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>



                </div>
            </div>
        </>
    )
}

export default Projects;