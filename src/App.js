import React from 'react';
//components
import Skill from './components/Skill.js';
import Bio from './components/Bio.js';
import Project from './components/Project.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';

//styling
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="aboutme" id="aboutme">
        <Bio />
      </div>
      <p className="myprojects" id="myprojects">My Projects</p>
      <div className="myprojects" >
        <Project projectImage="/images/projects/todo.PNG" projectName="Todo List" projectLink="https://jordanb1997.github.io/todolist/" gitHubLink="https://github.com/Jordanb1997/todolist" projectBlurb="Organise yourself with a new Todo List" />
        <Project projectImage="/images/projects/kanamatch.PNG" projectName="KanaMatch" projectLink="https://kanamatch.netlify.app/" gitHubLink="https://github.com/Jordanb1997/kanamatch" projectBlurb="Practive your Japanese (WIP)" />
      </div>
      <p className="frontend" id="frontend">Front-end Development</p>
      <div className="frontend">
        <Skill skillImage="/images/logos/logo_html5.png" skillName="HTML5" />
        <Skill skillImage="/images/logos/logo_css.png" skillName="CSS" />
        <Skill skillImage="/images/logos/logo_js.png" skillName="Javascript" />
        <Skill skillImage="/images/logos/logo_react.png" skillName="React" />
      </div>
      <p className="other">Other Skills</p>
      <div className="other">
        <Skill skillImage="/images/logos/logo_csharp.png" skillName="C#" />
        <Skill skillImage="/images/logos/logo_cpp.png" skillName="C++" />
        <Skill skillImage="/images/logos/logo_photoshop.png" skillName="Photoshop" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
