import React from 'react';
import { Link, Links } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/Projects"> Projects</Link></li>
        <li><Link to="/skillsAndCertifications">Skills & Certifications</Link></li>
        <li><Link to="/Experiences">Experience</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
      </ul>
    </nav>

  );
};

export default Navigation;
