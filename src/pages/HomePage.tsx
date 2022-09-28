import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Contact from './components/Contact';
import Presentation from './components/Presentation';
import Projects from './components/Projects'

const HomePage = () => {
    return (
    <>
        <Header></Header>
        <Jumbotron></Jumbotron>
        <Contact></Contact>
        <Presentation></Presentation>
        <Projects></Projects>
    </>)
}

export default HomePage;