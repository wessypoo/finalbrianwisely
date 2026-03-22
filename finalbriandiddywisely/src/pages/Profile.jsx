import UserProfile from "../components/UserProfile";
import ProjectCard from "../components/ProjectCard";

function Profile() {
  return (
    <div style={{ background: '#fff9d6', minHeight: '100vh', padding: '16px', textAlign: 'center', color: '#1a1a1a' }}>
      <h1 style={{ color: '#222' }}>Profile Page</h1>
      <p style={{ color: '#333' }}>Meet Wes and Brian</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', margin: '20px 0' }}>
        <div className="card-hover" style={{ borderRadius: '8px', transition: 'background 0.2s' }}>
          <UserProfile
            username="Wes"
            email="Unskilled coder, interested in electronics"
            avatarUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnUxazczYXppemllMmV0Y2JncjY3MW1vNDJ4MnU2NHU5MTFlaTFkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mpAJq0BoNZbig/giphy.gif"
          />
        </div>
        <div className="card-hover" style={{ borderRadius: '8px', transition: 'background 0.2s' }}>
          <UserProfile
            username="Brian"
            email="Addicted to Tung Tung Tung Sahur and Valorant"
            avatarUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnUxazczYXppemllMmV0Y2JncjY3MW1vNDJ4MnU2NHU5MTFlaTFkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mpAJq0BoNZbig/giphy.gif"
          />
        </div>
      </div>
      <h2 style={{ color: '#2d5c88' }}>Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <div className="card-hover" style={{ borderRadius: '8px', transition: 'background 0.2s' }}>
          <ProjectCard name="Pollution Information Website" description="An informational website to educate people about pollution, its impacts, and how to reduce it" />
        </div>
      </div>
      <style>{`.card-hover:hover { background: #fff9d6; }`}</style>
    </div>
  );
}

export default Profile;