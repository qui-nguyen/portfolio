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

const HomePage = () => {

    return (
        <>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <Presentation></Presentation>
            <SocialNetwork></SocialNetwork>
            <Projects></Projects>
            <Competences></Competences>
            <Experiences></Experiences>
            <Formations></Formations>
            <ButtonContact></ButtonContact>
            <Footer></Footer>
        </>)
}

export default HomePage;