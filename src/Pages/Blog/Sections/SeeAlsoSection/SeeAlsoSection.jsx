import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import PostCard from '../PostCard/PostCard';

export default function SeeAlsoSection({ posts, isMobile }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/blog-post/${id}`);
    };

    return (
        <section className="see-also-section">
            <h2 className="section-title">See Also</h2>

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
                                    onClick={() => handleClick(post.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <PostCard post={post} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="post-grid see-also-parent">
                    {posts.map(post => (
                        <div
                            key={post.id}
                            className="post-card-clickable"
                            onClick={() => handleClick(post.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
