import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import PostCard from '../PostCard/PostCard';
import postsData from "../../data/postsData.json";

export default function RecomendedSection({ 
  isMobile, 
  title = "Recommended", 
  posts = postsData.recommendedPosts,
  onPostClick 
}) {
  return (
    <section className="recomended-section">
      <h2 className="section-title">{title}</h2>

      {isMobile ? (
        <div className="blog-section mobile">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
          >
            {posts.map(post => (
              <SwiperSlide key={post.id}>
                <div
                  onClick={() => onPostClick?.(post.id)}
                  style={{ cursor: onPostClick ? 'pointer' : 'default' }}
                >
                  <PostCard post={post} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="post-grid">
          {posts.map(post => (
            onPostClick ? (
              <div
                key={post.id}
                className="post-card-clickable"
                onClick={() => onPostClick(post.id)}
                style={{ cursor: 'pointer' }}
              >
                <PostCard post={post} />
              </div>
            ) : (
              <Link 
                key={post.id} 
                to={`/blog-post/${post.id}`}
                className="post-card-link"
              >
                <PostCard post={post} />
              </Link>
            )
          ))}
        </div>
      )}
    </section>
  );
}
