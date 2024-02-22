import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export const Main = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', margin: '16px', padding: '16px' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'right' }}>Introduction</h2>
          <Introduction />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ width: '15.5%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', margin: '16px', padding: '16px' }}>
          <h2 style={{ fontSize: '2rem' }}>About Me</h2>
          <AboutMe />
        </div>
        <div style={{ width: '15.5%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', margin: '16px', padding: '16px' }}>
          <h2 style={{ fontSize: '2rem' }}>Skills</h2>
          <Skills />
        </div>
        <div style={{ width: '15.5%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', margin: '16px', padding: '16px' }}>
          <h2 style={{ fontSize: '2rem' }}>Projects</h2>
          <Projects />
        </div>
      </div>
      <footer style={{ width: '100%', height: '20vh', backgroundColor: '#3F729B', color: '#1F2937', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Contact />
      </footer>
    </div>
  );
};
