import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blog_image from '../../../../images/blog_img.jpg';

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    setExpanded(prev => !prev);
  };

  return (
    <Link to={`/blog-post/${post.id}`} className="post-card-link">
      <div className="post-card slide-down">
        <img src={blog_image} alt="Post" />
        <div className="inner-post-card">
          <span className="post-badge">{post.category}</span>
          <h3 className="post-title">{post.title}</h3>
          <div className="post-meta-par">
            <p className="post-meta">12 May 2025</p>
            <p className="post-meta">7 min read</p>
          </div>
          <div className={`post-desc-wrapper ${expanded ? 'expanded' : ''}`}>
            <p className="post-desc">
              "Ligula eget pulvinar fringilla mus duis vitae. Nec convallis turpis viverra ..."
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Donec vel ligula id leo dignissim fermentum a sit amet felis. Integer porttitor.
            </p>
          </div>
          <button className="read-more" onClick={handleReadMoreClick}>
            {expanded ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
