import React from 'react';

const VolunteerItem = ({ role, organization, description }) => {
  return (
    <div className="volunteer-item">
      <h4>{role} – {organization}</h4>
      <p>{description}</p>
    </div>
  );
};

export default VolunteerItem;
