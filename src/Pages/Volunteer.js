import React from 'react';
import VolunteerItem from '../components/VolunteerItem';

const volunteerData = [
  { role: 'Orientation Leader', organization: 'NAITSA', description: 'Guided new students through campus, helping them with resources.' },
  { role: 'Fundraising Team Lead', organization: 'Red Cross', description: 'Organized team meetings and led donor acquisition efforts.' },
  { role: 'Call Centre Service', organization: 'Red Cross', description: 'Managed donor calls and provided customer service.' },
  { role: 'Salesperson', organization: 'Various Fundraisers', description: 'Raised $1,300 by selling chuck pucks for fundraising efforts.' },
];

const Volunteer = () => {
  return (
    <div className="page-container">
      <h1>Volunteer Experience</h1>
      {volunteerData.map((item, index) => (
        <VolunteerItem
          key={index}
          role={item.role}
          organization={item.organization}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Volunteer;
