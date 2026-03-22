import React, { useState } from 'react';

const SkillCard = ({ name, level }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', cursor: 'pointer' }} onClick={() => setClicked(!clicked)}>
      <h3>{name}</h3>
      <p>Level: {level}%</p>
      {clicked && <p>I know {name}</p>}
    </div>
  );
};

export default SkillCard;
