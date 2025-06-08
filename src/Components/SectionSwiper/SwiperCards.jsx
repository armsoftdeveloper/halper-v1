import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./slider.css";
import pic1 from "../../images/swiper1.png";
import pic2 from "../../images/swiper2.png";
import pic3 from "../../images/swiper3.png";
import pic4 from "../../images/swiper4.png";
import pic5 from "../../images/swiper5.png";


const cards = [
  {
    id: 1,
    image: pic1,
    title: "Jay, Barber",
    description:
      "My clients can book appointments via chat or voice, get automated reminders, and they love how easy it all feels. HALPER handles my scheduling, follow ups, and even keeps track of reviews and feedback — like a real business manager.",
  },
  {
    id: 2,
    image: pic2,
    title: "Jared, Physical Therapist",
    description:
      "No more missed appointments. HALPER handles scheduling, syncs with my calendar, and keeps my workflow on track. I get to focus on patient care.",
  },
  {
    id: 3,
    image: pic3,
    title: "Ezra, Human Design Guide",
    description:
      "Clients love the smooth process. I love not dealing with scheduling chaos. HALPER keeps my spiritual business structured and flowing.",
  },
  {
    id: 4,
    image: pic4,
    title: "Elena, Nutritionist",
    description:
      "Before HALPER, I spent hours on admin. Now bookings, reminders, and follow ups run on autopilot. It’s smooth, personal, and saves me so much time.",
  },
  {
    id: 5,
    image: pic5,
    title: "Anna, Lash Artist",
    description:
      "Before HALPER, I was constantly chasing messages and trying to keep up with last-minute reschedules. Now my bookings are automated, my calendar stays full, and I never miss a message — even while I’m working. My beauty client database is finally organized, and in just three weeks, my bookings doubled.",
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
