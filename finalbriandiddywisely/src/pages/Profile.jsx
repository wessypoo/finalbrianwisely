import UserProfile from "../components/UserProfile";
import ProjectCard from "../components/ProjectCard";

function Profile() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Profile Page</h1>
      <p>Meet Wes and Brian</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', gap: '20px', width: '100%' }}>
        <UserProfile
          username="Wes"
          email="Unskilled coder, interested in electronics"
          avatarUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnUxazczYXppemllMmV0Y2JncjY3MW1vNDJ4MnU2NHU5MTFlaTFkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mpAJq0BoNZbig/giphy.gif"
        />
        
        <UserProfile
          username="Brian"
          email="Addicted to Tung Tung Tung Sahur and Valorant"
          avatarUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnUxazczYXppemllMmV0Y2JncjY3MW1vNDJ4MnU2NHU5MTFlaTFkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mpAJq0BoNZbig/giphy.gif"
        />
      </div>

      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ProjectCard name="Pollution Information Website" description="An informational website to educate people about pollution, its impacts, and how to reduce it" />
      </div>
    </div>
  );
}

export default Profile;