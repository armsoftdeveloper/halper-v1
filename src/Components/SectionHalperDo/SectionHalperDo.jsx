import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img from "../../images/pict.png";
import "./sectionHalperDo.css";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';


const features = [
    {
        title: "Multi-Channel Communication",
        description:
            "Halper integrates with Instagram, Telegram, WhatsApp, and Facebook Messenger to manage client communication – bookings, reminders, and inquiries – all in one place."
    },
    {
        title: "Automated Appointment Scheduling",
        description:
            "Clients can book, reschedule, or cancel appointments via Instagram, WhatsApp, Telegram, or Messenger, and Halper syncs everything with your calendar, saving you time and ensuring seamless coordination."
    },
    {
        title: "AI CRM",
        description:
        "Halper automates lead tracking and follow-ups through Instagram, WhatsApp, Telegram, and Messenger, helping convert leads into loyal clients."
    },
    {
        title: "All-in-One Solution",
        description:
        "Halper is the all-in-one tool for solo entrepreneurs, streamlining communication, scheduling, and administrative work across multiple platforms."
    },
];

function FeatureCard({ title, description }) {
    return (
        <div className="halper-do__feature">
            <h3 className="halper-do__feature-title">
                <CheckCircleIcon className="halper-do__feature-icon" />
                {title}
            </h3>
            <p className="halper-do__feature-description">{description}</p>
        </div>
    );
}


export default function SectionHalperDo() {
    const swiperRef = useRef(null);
    const { setPopupOpen } = usePopup();


    return (
        <section className="halper-do">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="halper-do__title">What Halper Can Do for You</h2>
                    <p className="halper-do__subtitle">
                        HALPER automates chats, bookings, reminders and follow ups so you can stay focused on growing your business
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="halper-do__content">
                        <div className="halper-do__features desktop">
                            {features.map((f, i) => (
                                <FeatureCard key={i} {...f} />
                            ))}
                        </div>

                        <div className="halper-do__features mobile">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 5000 }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                {features.map((f, i) => (
                                    <SwiperSlide key={i}>
                                        <FeatureCard {...f} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="halper-do__image">
                            <img src={img} alt="Phone preview" />
                        </div>
                    </div>
                </motion.div>

                <div className="halper-do__btn-container">
                    <button className="halper-do__btn"
                        onClick={() => setPopupOpen(true)}
                    >
                        Try For Free Now <ArrowForwardIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}
