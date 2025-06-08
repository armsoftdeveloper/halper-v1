import ChooseUsGrid from "./ChooseUsGrid";
import "./sectionChooseUs.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export default function SectionChooseUs() {
    return (
        <section className="choose-us">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container">
                    <div className="choose-us__text-block fade-in">
                        <h2 className="choose-us__title">Who choose us</h2>
                        <p className="choose-us__subtitle">
                            Solo professionals who want less admin, more bookings, and a smoother way to run and grow their service business.
                        </p>
                    </div>

                    <ChooseUsGrid />

                    <div className="choose-us__button-container">
                        <button className="choose-us__button">
                            See all niches
                            <ArrowForwardIcon />
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
