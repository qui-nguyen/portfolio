import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import SocialNetwork from './components/SocialNetwork';
import Presentation from './components/Presentation'

const ProjectsPage = () => {
    return (
        <div className="Header">
            <Header></Header>
            <Jumbotron></Jumbotron>
            <SocialNetwork></SocialNetwork>
            <Presentation></Presentation>
            <div>Google con heo</div>
        </div>)
}

export default ProjectsPage;