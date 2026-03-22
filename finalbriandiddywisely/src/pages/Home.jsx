import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection 
        title="Welcome to Our Site"
        subtitle="This is our portfolio project"
      />

      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>About Our Project</h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          We're working on creating an informational website to help educate people about pollution and its effects on our environment.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dm9yN3pwNmtsMzljbDZvY2cwd3pzNmhvb2pvZDI2YzB0bjNmazEzeCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/CP6IT36umk7Zu/giphy.gif" 
            alt="seal"
            style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '14px', color: '#888', maxWidth: '600px', margin: '0 auto' }}>
          This project combines education with web development to create something meaningful.
        </p>
      </div>
    </div>
  );
}

export default Home;