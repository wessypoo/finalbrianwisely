import { useState } from 'react';
import TimelineItem from '../components/TimelineItem';

function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const facts = [
    "Wes loves electronics",
    "Brian is a Valorant fan",
    "We built this app together"
  ];
  return (
    <div style={{ background: '#ffe0ef', minHeight: '100vh', padding: '16px', textAlign: 'center', color: '#181818' }}>
      <h1 style={{ color: '#181818' }}>About Page</h1>
      <p style={{ color: '#222' }}>This is the About page where you can learn more about us.</p>
      <h2 style={{ color: '#b23c6f' }}>Fun Facts</h2>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        {facts.map((fact, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="card-hover"
            style={{ padding: '8px', margin: '6px 0', backgroundColor: activeIndex === index ? '#f8b6d8' : 'white', cursor: 'pointer', borderRadius: '6px', transition: 'background 0.2s', color: '#181818' }}
          >
            <p style={{ margin: 0 }}>{fact}</p>
          </div>
        ))}
      </div>
      <h2 style={{ color: '#b23c6f' }}>Our Journey</h2>
      <TimelineItem year="2025" event="Started Learning React" />
      <TimelineItem year="2025" event="Built First App" />
      <TimelineItem year="2026" event="Created This Portfolio" />
      <style>{`.card-hover:hover { background: #f8b6d8 !important; }`}</style>
    </div>
  );
}

export default About;