import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import postsData from './data/postsData.json';
import './blogIndividual.css';
import meta from "../../images/meta_vector.png";
import instagram from "../../images/instagram_vector.png";
import tiktok from "../../images/tiktok_vecot.png";
import SeeAlsoSection from './Sections/SeeAlsoSection/SeeAlsoSection';

export default function BlogIndividual() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id, 10);
  const seeAlsoPosts = postsData.recommendedPosts.filter(p => p.id !== postId);
  const [isMobile, setIsMobile] = useState(false);

  const allPosts = [
    ...postsData.editorsPosts,
    ...postsData.recommendedPosts,
    ...postsData.latestPosts,
  ];

  const post = allPosts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 991);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  if (!post) return <div>Post not found</div>;

  const handlePostClick = (clickedId) => {
    if (parseInt(clickedId, 10) !== postId) {
      navigate(`/blog/${clickedId}`);
    } else {
      navigate(0);
    }
  };

  return (
    <div className="blog-container">
      <div className="inner-container">
        <h1 className="title">{post.title}</h1>
        <div className="header-meta">
          <div className="tag">{post.category}</div>
          <div className="meta-info">
            <div>
              <img src="avatar.png" alt={post.author || "Author"} />
              {post.author || "Unknown Author"}
            </div>
            <div>|</div>
            <div>{post.time || '12 May 2025'}</div>
            <div>|</div>
            <div>{post.readTime || '7 min read'}</div>
          </div>
        </div>

        <div className="hero-image"></div>

        <div className="post-parent">
          <p className="post-description">
            {post.content || "Detailed content for this post is not available."}
          </p>
        </div>

        <div className="social-section">
          <span>Share:</span>
          <div className="social-icons">
            <div className="icon"><img src={meta} alt="Meta" /></div>
            <div className="icon"><img src={instagram} alt="Instagram" /></div>
            <div className="icon"><img src={tiktok} alt="Tiktok" /></div>
          </div>
        </div>

        {[...Array(4)].map((_, idx) => (
          <div key={idx} className='post-parent'>
            <h2 className="post-title">Why Every Modern Business Needs an AI Business Manager</h2>
            <p className="post-description">
              In today’s fast-paced digital economy, staying ahead isn’t just about working harder — it’s about working smarter...
            </p>
          </div>
        ))}

        <div className="subscribe-form">
          <h2 className="subscribe-title">The most trending news by email every week</h2>
          <div className="form-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='bottom-section-blog-individual'>
        <SeeAlsoSection posts={seeAlsoPosts} isMobile={isMobile} />
        <button className=''
          onClick={() => navigate('/blog')}
          className="back-button"
        >back to blog</button>
      </div>
    </div >
  );
}
