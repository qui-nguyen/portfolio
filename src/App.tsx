import React from 'react';
import './assets/styles/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Projects" component={ProjectsPage} />
      </Switch>
    </Router>

  );
}

export default App;
