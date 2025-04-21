import React from 'react';

const SkillList = ({ title, skills }) => {
  return (
    <section className="skills-list">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default SkillList;
