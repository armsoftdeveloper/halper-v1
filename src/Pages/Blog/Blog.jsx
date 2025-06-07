import React, { useState, useEffect } from 'react';
import './blog.css';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import blog_image from "../../images/blog_img.jpg";

const categories = ['All', 'Finance', 'Real Estate', 'Category A', 'Category B', 'Category C', 'Category D'];

const editorsPosts = [
    { id: 1, title: 'Quick tips for getting ...', category: 'Finance' },
    { id: 2, title: 'Understanding real estate ...', category: 'Real Estate' },
    { id: 3, title: 'Category A insights ...', category: 'Category A' },
    { id: 4, title: 'Breaking down finances ...', category: 'Finance' },
];

// Рекоммендованные посты (можешь заменить своими)
const recommendedPosts = [
    { id: 101, title: 'Recommended Post 1', category: 'Recommended' },
    { id: 102, title: 'Recommended Post 2', category: 'Recommended' },
    { id: 103, title: 'Recommended Post 3', category: 'Recommended' },
    { id: 104, title: 'Recommended Post 4', category: 'Recommended' },
];

// Все последние посты
const allLatestPosts = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Latest Post #${i + 1}`,
    category: 'Latest'
}));

const PostCard = ({ post }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="post-card slide-down">
            <img src={blog_image} alt="Post" />
            <div className='inner-post-card'>
                <span className="post-badge">{post.category}</span>
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta-par">
                    <p className='post-meta'>12 May 2025 </p>
                    <p className='post-meta'>7 min read</p>
                </div>
                <div className={`post-desc-wrapper ${expanded ? 'expanded' : ''}`}>
                    <p className="post-desc">
                        "Ligula eget pulvinar fringilla mus duis vitae. Nec convallis turpis viverra ..."
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Donec vel ligula id leo dignissim fermentum a sit amet felis. Integer porttitor.
                    </p>
                </div>
                <button className="read-more" onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            </div>
        </div>
    );
};

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [latestVisibleCount, setLatestVisibleCount] = useState(12);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 991);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filteredEditorsPosts =
        activeCategory === 'All'
            ? editorsPosts
            : editorsPosts.filter(post => post.category === activeCategory);

    const visibleLatestPosts = allLatestPosts.slice(0, latestVisibleCount);

    const handleLoadMoreLatest = () => {
        setLatestVisibleCount(prev => prev + 4);
    };

    return (
        <div className='blog'>
            <div className="blog-page">
                <div className='blog-header-parent'>
                    <header className="blog-header">
                        <h1 className="logo">BLOG</h1>
                        {isMobile ?
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
                            : ""}
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

                {/* Editor's Choice Section */}
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
                                        <PostCard post={post} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="post-flex">
                            {filteredEditorsPosts.map(post => (
                                <PostCard key={post.id} post={post} />
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
                                        <PostCard post={post} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <>
                            <div className="post-flex">
                                {visibleLatestPosts.map(post => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>
                            {latestVisibleCount < allLatestPosts.length && (
                                <button className="load-more" onClick={handleLoadMoreLatest}>Load more</button>
                            )}
                        </>
                    )}
                </section>

                <section className="recomended-section">
                    <h2 className="section-title">Recommended</h2>

                    {isMobile ? (
                        <div className="blog-section mobile">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 5000 }}
                            >
                                {recommendedPosts.map(post => (
                                    <SwiperSlide key={post.id}>
                                        <PostCard post={post} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="post-grid">
                            {recommendedPosts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Blog;
