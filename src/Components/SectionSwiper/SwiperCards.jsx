import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./slider.css";
import pic from "../../images/swiper.jpg";

const cards = [
  {
    id: 1,
    image: pic,
    title: "Card Title",
    description:
      "Ligula eget pulvinar fringilla mus duis vitae. Nec convallis turpis viverra sit enim est eu. Proin tempus tempor ullamcorper id. Auctor volutpat.",
  },
  {
    id: 2,
    image: pic,
    title: "Another Title",
    description: "Short description without toggle.",
  },
  {
    id: 3,
    image: pic,
    title: "Another Title",
    description: "Short description without toggle.",
  },
  {
    id: 4,
    image: pic,
    title: "Another Title",
    description: "Short description without toggle.",
  },
  {
    id: 5,
    image: pic,
    title: "Another Title",
    description: "Short description without toggle.",
  },
  {
    id: 6,
    image: pic,
    title: "Another Title",
    description: "Short description without toggle.",
  },
];

function Card({ image, title, description, swiperRef }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 100;

  const isOverflow = description.length > maxChars;
  const displayText =
    expanded || !isOverflow
      ? description
      : description.slice(0, maxChars) + "...";

  const toggleExpanded = () => {
    setExpanded((prev) => {
      const nextExpanded = !prev;
      if (swiperRef?.current) {
        if (nextExpanded) {
          swiperRef.current.autoplay.stop();
        } else {
          swiperRef.current.autoplay.start();
        }
      }
      return nextExpanded;
    });
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className={`card__description ${expanded ? "expanded" : ""}`}>
        {displayText}
      </p>
      {isOverflow && (
        <button className="card__button" onClick={toggleExpanded}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default function SwiperCards() {
  const swiperRef = useRef(null);

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card {...card} swiperRef={swiperRef} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
