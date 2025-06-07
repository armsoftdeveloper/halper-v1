import React from "react";
import "./sectionSwiper.css";
import SwiperCards from "./SwiperCards";
import { motion } from "framer-motion";

export default function SectionSwiper() {
    return (
        <section className="section-swiper_main">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="section-swiper_main_typography">
                    <p>Our Customers Say</p>
                </div>
                <SwiperCards />
            </motion.div>
        </section>
    )
}