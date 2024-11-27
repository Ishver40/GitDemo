import { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="header">
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/skills">My Skills</Link></li>
        <li><Link to="/projects">My Projects</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
        <li><Link to="/resume">My Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
