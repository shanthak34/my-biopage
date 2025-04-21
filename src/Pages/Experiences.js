import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const experienceData = [
  {
    title: 'Service Desk Technician',
    company: 'Natural Resource Canada',
    duration: 'May 2023 – April 2024',
    responsibilities: [
      'Supported end-user devices across a large environment.',
      'Provided Tier 2 walk-up support for hardware and software issues.',
      'Managed software and hardware configurations.',
    ],
  },
  {
    title: 'Business Strategy Intern',
    company: 'Optima Living',
    duration: 'Jan 2024 – April 2024',
    responsibilities: [
      'Led the deployment of technology solutions for residents’ well-being.',
      'Collaborated with stakeholders for seamless project implementation.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Buds in Bloom',
    duration: 'Jan 2023 – April 2023',
    responsibilities: [
      'Developed front-end applications using React.js, JavaScript, HTML5, and CSS3.',
      'Built responsive UI components with React Bootstrap and MUI.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="page-container">
      <h1>Experience</h1>
      {experienceData.map((item, index) => (
        <ExperienceItem
          key={index}
          title={item.title}
          company={item.company}
          duration={item.duration}
          responsibilities={item.responsibilities}
        />
      ))}
    </div>
  );
};

export default Experience;

