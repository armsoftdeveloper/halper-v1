import "./sectionCalculator.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Calculator from "./Calculator";

export default function SectionCalculator() {
    return (
        <section className="section-calculator">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container">
                    <div className="section-calculator__text-block fade-in">
                        <h2 className="section-calculator__title">Calculate Your <br />Savings With Halper</h2>
                        <p className="section-calculator__subtitle">
                            With Halper, <b>managing your clients becomes seamless.</b>
                            This AI virtual manager for small businesses streamlines appointments.
                        </p>
                    </div>

                    <Calculator />
                </div>
            </motion.div>
        </section>
    );
}
