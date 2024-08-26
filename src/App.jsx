// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';
// import Education from './Components/Education';
// import Projects from './Components/Projects';
// import Experience from './Components/Experience';
// import NavBbar from './Components/NavBar';
// import Certification from './Components/Certifications';
// import './index.css';
// import AboutMe from './Components/AboutMe';
// import ContactMe from './Components/ContactMe';
// import Skills from './Components/Skills';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <NavBbar />
//       <AboutMe id="about-me" />
//       <Skills id="skills" />
//       <Experience id="experience" />
//       <Projects id="projects" />
//       <Certification id="certification" />
//       <Education id="education" />
//       <ContactMe id="contact-me" />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import NavBbar from './Components/NavBar';
import Certification from './Components/Certifications';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <NavBbar />
      <section id="about-me"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="certification"><Certification /></section>
      <section id="education"><Education /></section>
      <section id="contact-me"><ContactMe /></section>
    </div>
  );
}

export default App;
