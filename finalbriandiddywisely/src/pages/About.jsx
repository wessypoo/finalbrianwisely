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
    <div style={{ padding: '20px' }}>
      <h1>About Page</h1>
      <p>Welcome to our application! This is the About page where you can learn more about us.</p>
      <p style={{ color: '#666', marginBottom: '30px' }}>We are two developers passionate about creating meaningful web applications that help educate people on important environmental topics like pollution and its global impact.</p>

      <h2>Fun Facts</h2>
      <div style={{ maxWidth: '400px' }}>
        {facts.map((fact, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            style={{
              padding: '10px',
              margin: '8px 0',
              backgroundColor: activeIndex === index ? '#e0e0e0' : '#f5f5f5',
              cursor: 'pointer'
            }}
          >
            <p>{fact}</p>
          </div>
        ))}
      </div>

      <h2>Our Journey</h2>
      <TimelineItem year="2025" event="Started Learning React" />
      <TimelineItem year="2025" event="Built First App" />
      <TimelineItem year="2026" event="Created This Portfolio" />
    </div>
  );
}

export default About;