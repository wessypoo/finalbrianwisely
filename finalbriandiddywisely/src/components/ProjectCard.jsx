import React from 'react';

const ProjectCard = ({ name, description }) => {
  return (
    <div style={{ border: '1px solid black', padding: '15px', margin: '10px', width: '200px' }}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
