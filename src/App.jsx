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

    <div className="App">
      <NavBbar />
      <main>
        <section className="scroll-mt-20" id="about"><AboutMe /></section>
        <section className=" scroll-mt-20" id="skills"><Skills /></section>
        <section className="scroll-mt-20" id="experience"><Experience /></section>
        <section className="scroll-mt-20" id="projects"><Projects /></section>
        <section className="scroll-mt-20" id="certification"><Certification /></section>
        <section className="scroll-mt-20" id="education"><Education /></section>
        <section className="scroll-mt-20" id="contact"><ContactMe /></section>
      </main>
    </div>
  );
}

export default App;
