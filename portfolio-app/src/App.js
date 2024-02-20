import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact.js';
import Navbar from './NavBar';
import Resume from './Resume';

const App = () => (
  <Router>
    <Navbar />
    <Route path="/" exact component={Introduction} />
    <Route path="/about" component={AboutMe} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/Resume" component={Resume} />
  </Router>
);

export default App;
