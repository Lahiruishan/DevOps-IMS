
import React from 'react';
import './Card.css'; // Optional for styling

const Card = ({ profilePicture, name, description }) => {
  return (
    <div className="card">
      <img src={profilePicture} alt={`${name}'s profile`} className="card-image" />
      <div className="card-content">
        <h3 className="card-header">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
