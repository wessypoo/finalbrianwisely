import React, { useState } from 'react';

const UserProfile = ({ username, email, avatarUrl }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [downvoteCount, setDownvoteCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', maxWidth: '220px', textAlign: 'center', background: 'white' }}>
      <img src={avatarUrl} alt={username} style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 10px', display: 'block' }} />
      <h2 style={{ fontSize: '18px', margin: '8px 0', color: '#222' }}>{username}</h2>
      <p style={{ color: '#222', fontSize: '14px', marginBottom: '14px' }}>{email}</p>
      <button 
        onClick={() => setLikeCount(likeCount + 1)}
        style={{ margin: '0 6px', padding: '6px 12px', borderRadius: '4px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'pointer', color: '#222' }}
      >
        👍 {likeCount}
      </button>
      <button 
        onClick={() => setDownvoteCount(downvoteCount + 1)}
        style={{ margin: '0 6px', padding: '6px 12px', borderRadius: '4px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'pointer', color: '#222' }}
      >
        👎 {downvoteCount}
      </button>
    </div>
  );
};

export default UserProfile;