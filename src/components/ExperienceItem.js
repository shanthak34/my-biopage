import React, { useState } from 'react';

const ExperienceItem = ({ title, company, duration, responsibilities }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="experience-item">
      <div onClick={toggleDropdown} className="header" style={{ cursor: 'pointer' }}>
        <h4>{title} – {company} ({duration})</h4>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceItem;

