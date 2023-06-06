import { useState, useEffect } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import SocialNetwork from './components/SocialNetwork';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Competences from './components/Competences';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import Footer from './components/Footer';
import ButtonContact from './components/ButtonContact';
import FloatInformation from './components/FloatInformation';


const HomePage = () => {
    const [display, setDisplay] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () =>
            window.removeEventListener("scroll", onScroll);
    }, [scrollY])

    const onScroll = () => {
        setScrollY(window.scrollY);
        (scrollY > 500 && ((window.innerHeight + scrollY) <= document.body.offsetHeight - 100)) ? setDisplay(true) : setDisplay(false);
    };

    return (
        <>
            <Header></Header>
            <Presentation></Presentation>
            <Projects></Projects>
            <Competences></Competences>
            <Experiences></Experiences>
            <Formations></Formations>
            <FloatInformation />
            <ButtonContact
                isVisible={display}
            ></ButtonContact>
            <Footer></Footer>
        </>)
}

export default HomePage;