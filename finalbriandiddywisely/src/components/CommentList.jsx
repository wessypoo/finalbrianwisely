import React, { useState } from 'react';

const CommentList = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 max-w-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            {comment}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex">
        <input 
          type="text" 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          placeholder="Add a comment..." 
          className="flex-grow border p-2 rounded-l"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentList;