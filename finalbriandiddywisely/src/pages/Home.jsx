import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div style={{ background: '#2d2d2d', minHeight: '100vh' }}>
      <HeroSection 
        title="Welcome to Our Site"
        subtitle="This is our portfolio project"
      />
      <div style={{ textAlign: 'center', padding: '24px' }}>
        <h2 style={{ color: 'white' }}>About Our Project</h2>
        <p style={{ color: '#eee' }}>We are building a website to help educate people about pollution and its effects.</p>
        <div className="card-hover" style={{ display: 'inline-block', borderRadius: '8px', background: 'white', padding: '16px', margin: '18px auto', transition: 'background 0.2s' }}>
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dm9yN3pwNmtsMzljbDZvY2cwd3pzNmhvb2pvZDI2YzB0bjNmazEzeCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/CP6IT36umk7Zu/giphy.gif" 
            alt="seal"
            style={{ width: '180px', height: 'auto', borderRadius: '8px', display: 'block', margin: '0 auto' }}
          />
        </div>
        <p style={{ color: '#eee' }}>This project is for our class.</p>
      </div>
      <style>{`.card-hover:hover { background: #2d2d2d; color: white; }`}</style>
    </div>
  );
}

export default Home;