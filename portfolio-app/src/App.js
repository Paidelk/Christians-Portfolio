import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  </Router>
);

export default App;
