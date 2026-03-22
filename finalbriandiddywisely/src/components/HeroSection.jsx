import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white', 
      padding: '40px 20px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px', fontWeight: 'bold', lineHeight: '1.4' }}>{title}</h1>
      <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.5' }}>{subtitle}</p>
    </div>
  );
};

export default HeroSection;
