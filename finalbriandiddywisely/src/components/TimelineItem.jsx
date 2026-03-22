import React from 'react';

const TimelineItem = ({ year, event }) => {
  return (
    <div style={{ marginBottom: '20px', paddingLeft: '20px', borderLeft: '2px solid blue' }}>
      <h3>{year}</h3>
      <p>{event}</p>
    </div>
  );
};

export default TimelineItem;
