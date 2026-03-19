import React, { useState } from 'react';

const UserProfile = ({ username, email, avatarUrl }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);
  const [tempEmail, setTempEmail] = useState(email);

  const handleSave = () => {
    // Assume a prop or context handles saving
    setIsEditing(false);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 m-4 max-w-md shadow-md">
      <img src={avatarUrl} alt={username} className="w-24 h-24 rounded-full mx-auto mb-4" />
      {isEditing ? (
        <div className="text-center">
          <input 
            type="text" 
            value={tempUsername} 
            onChange={(e) => setTempUsername(e.target.value)} 
            className="border p-2 mb-2 w-full text-center"
          />
          <input 
            type="email" 
            value={tempEmail} 
            onChange={(e) => setTempEmail(e.target.value)} 
            className="border p-2 mb-4 w-full text-center"
          />
          <button 
            onClick={handleSave} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{username}</h2>
          <p className="text-gray-600 mb-4">{email}</p>
          <button 
            onClick={() => setIsEditing(true)} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;