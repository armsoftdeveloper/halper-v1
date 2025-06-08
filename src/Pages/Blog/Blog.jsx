import React, { useState, useEffect } from 'react';
import './blog.css';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import blog_image from "../../images/blog_img.jpg";
import { Link } from 'react-router-dom';
import postsData from './data/postsData.json';
import PostCard from "./Sections/PostCard/PostCard";
import RecomendedSection from './Sections/RecomendedSection/RecomendedSection';

const categories = postsData.categories;

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const [activeCategory, setActiveCategory] = useState('All');
    const [latestVisibleCount, setLatestVisibleCount] = useState(12);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 991);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filteredEditorsPosts = activeCategory === 'All'
        ? postsData.editorsPosts
        : postsData.editorsPosts.filter(post => post.category === activeCategory);

    const visibleLatestPosts = postsData.latestPosts.slice(0, latestVisibleCount);
    const recommendedPosts = postsData.recommendedPosts;

    const handleLoadMoreLatest = () => {
        setLatestVisibleCount(prev => prev + 4);
    };

    return (
        <div className='blog'>
            <div className="blog-page">
                <div className='blog-header-parent'>
                    <header className="blog-header">
                        <h1 className="logo">BLOG</h1>
                        {isMobile ? (
                            <nav className="category-nav category-nav-mobile">
                                {categories.map((cat, i) => (
                                    <span
                                        key={i}
                                        className={`category-item ${cat === activeCategory ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </nav>
                        ) : null}
                        <button className="subscribe-btn">Subscribe</button>
                    </header>

                    <section className="banner">
                        <h2>Banner</h2>
                    </section>
                </div>

                <nav className="category-nav category-nav-desktop">
                    {categories.map((cat, i) => (
                        <span
                            key={i}
                            className={`category-item ${cat === activeCategory ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </span>
                    ))}
                </nav>

                <section className="blog-top-section">
                    <h2 className="section-title">Editor's choice</h2>

                    {isMobile ? (
                        <div className="blog-section mobile">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 5000 }}
                            >
                                {filteredEditorsPosts.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <Link to={`/blog-post/${post.id}`} className="post-card-link">
                                            <PostCard post={post} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="post-flex">
                            {filteredEditorsPosts.map(post => (
                                <Link key={post.id} to={`/blog-post/${post.id}`} className="post-card-link">
                                    <PostCard post={post} />
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* Latest Posts Section */}
                <section className="posts-section light-bg">
                    <h2 className="section-title">Latest posts</h2>

                    {isMobile ? (
                        <div className="blog-section mobile">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 5000 }}
                            >
                                {visibleLatestPosts.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <Link to={`/blog-post/${post.id}`} className="post-card-link">
                                            <PostCard post={post} />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <>
                            <div className="post-flex">
                                {visibleLatestPosts.map(post => (
                                    <Link key={post.id} to={`/blog-post/${post.id}`} className="post-card-link">
                                        <PostCard post={post} />
                                    </Link>
                                ))}
                            </div>
                            {latestVisibleCount < postsData.latestPosts.length && (
                                <button className="load-more" onClick={handleLoadMoreLatest}>Load more</button>
                            )}
                        </>
                    )}
                </section>

                <RecomendedSection isMobile={isMobile} />
            </div>
        </div>
    );
};

export default Blog;
