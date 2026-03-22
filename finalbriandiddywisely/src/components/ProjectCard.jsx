import React from 'react';

const ProjectCard = ({ name, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', width: '220px', background: 'white', color: '#222', textAlign: 'center' }}>
      <h2 style={{ fontSize: '18px', margin: '8px 0', color: '#222' }}>{name}</h2>
      <p style={{ color: '#222', fontSize: '14px', marginBottom: '10px' }}>{description}</p>
    </div>
  );
};

export default ProjectCard;
