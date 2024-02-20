import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <a href="https://github.com/Paidelk" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/ramos-chris/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <Link to="/Resume">Resume</Link>
  </nav>
);

export default Navbar;
