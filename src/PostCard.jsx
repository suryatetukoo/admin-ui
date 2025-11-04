import React, { useState } from 'react';
import './PostCard.css';

const PostCard = ({ id, userId, title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="post-title">{title}</h3>
      </div>
      <div className="post-body">
        <p className="post-content">{body}</p>
      </div>
      <div className="post-footer">
        <button 
          className={`post-button ${isClicked ? 'clicked' : ''}`}
          onClick={handleButtonClick}
        >
          {isClicked ? 'Tombol sudah diklik' : 'Silahkan Klik'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;