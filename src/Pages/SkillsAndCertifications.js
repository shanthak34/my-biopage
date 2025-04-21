import React from 'react';
import SkillList from '../components/SkillList';

const skills = [
  'Operating Systems: Microsoft Windows 10/11, MacOS',
  'Software: Microsoft Office 365, Adobe Acrobat',
  'Technologies: Web API, DevOps / GIT',
  'Languages: React.js, C#, HTML, CSS, JavaScript, Flutter, Python, SQL',
];

const certifications = [
  'CompTIA A+ Certification',
  'LinkedIn Learning Certificates in various IT domains (System Admin, Network Basics, Microsoft 365, SQL, Agile, etc.)',
  'ServiceNow IT Leadership Professional Certificate (NASBA)',
];

const SkillsAndCertifications = () => {
  return (
    <div className="page-container">
      <h1>Skills and Certifications</h1>
      <SkillList title="Technical Skills" skills={skills} />
      <SkillList title="Certifications" skills={certifications} />
    </div>
  );
};

export default SkillsAndCertifications;
