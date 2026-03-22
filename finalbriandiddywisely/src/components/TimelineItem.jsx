import React from 'react';

const TimelineItem = ({ year, event }) => {
  return (
    <div style={{ marginBottom: '20px', paddingLeft: '20px', borderLeft: '2px solid #181818', color: '#181818' }}>
      <h3 style={{ margin: 0 }}>{year}</h3>
      <p style={{ margin: 0 }}>{event}</p>
    </div>
  );
};

export default TimelineItem;
