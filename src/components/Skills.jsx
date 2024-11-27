import { useState } from 'react'
import "../styles/Skills.css";

function Skills() {
  const skills = ["React.js", "HTML", "CSS", "JavaScript", "Git/GitHub"];
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
