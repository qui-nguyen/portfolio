import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Contact from './components/Contact';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Competences from './components/Competences';
import Formations from './components/Formations';
import React from 'react';

const HomePage = () => {
    
    return (
    <>
        <Header></Header>
        <Jumbotron></Jumbotron>
        <Contact></Contact>
        <Presentation></Presentation>
        <Projects></Projects>
        <Competences></Competences>
        <Formations></Formations>
    </>)
}

export default HomePage;