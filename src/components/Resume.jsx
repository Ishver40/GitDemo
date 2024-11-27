import { useState } from 'react'
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <a href="/path/to/resume.pdf" download>
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
