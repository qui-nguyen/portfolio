import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Contact from './components/Contact';
import Presentation from './components/Presentation'

const ProjectsPage = () => {
    return (
        <div className="Header">
            <Header></Header>
            <Jumbotron></Jumbotron>
            <Contact></Contact>
            <Presentation></Presentation>
            <div>Google con heo</div>
        </div>)
}

export default ProjectsPage;