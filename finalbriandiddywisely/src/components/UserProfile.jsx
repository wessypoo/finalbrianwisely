import React, { useState } from 'react';

const UserProfile = ({ username, email, avatarUrl }) => {
  const [liked, setLiked] = useState(false);
  const [hearted, setHearted] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '10px', maxWidth: '300px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <img src={avatarUrl} alt={username} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>{username}</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>{email}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setLiked(!liked)}
          style={{ padding: '8px 16px', backgroundColor: liked ? '#ff6b6b' : '#f0f0f0', color: liked ? 'white' : 'black', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}
        >
          👍 Like
        </button>
        
        <button 
          onClick={() => setHearted(!hearted)}
          style={{ padding: '8px 16px', backgroundColor: hearted ? '#ff69b4' : '#f0f0f0', color: hearted ? 'white' : 'black', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}
        >
          ❤️ Heart
        </button>
        
        <button 
          style={{ padding: '8px 16px', backgroundColor: '#f0f0f0', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px' }}
        >
          ✕ Close
        </button>
      </div>
    </div>
  );
};

export default UserProfile;