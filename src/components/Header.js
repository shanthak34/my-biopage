import React from 'react';
import profileImage from '../asset/images/myphoto.jpg';
const Header = () => {
  return (
    <header className="header">
        <div className="image-container">
        <img src={profileImage} alt="Shantha Kumari Arumugam" className="profile-img" />
      </div>
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my work and skills!</p>
    </header>
  );
};

export default Header;
