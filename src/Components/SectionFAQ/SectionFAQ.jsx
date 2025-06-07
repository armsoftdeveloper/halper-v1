import DropDown from "./DropDown";
import "./sectionFAQ.css";
import { motion } from "framer-motion";

export default function SectionFAQ() {
    return (
        <section className="section-faq">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container">
                    <div className="section-faq__text-block fade-in">
                        <h2 className="section-faq__title">Frequently Asked Questions</h2>
                        <p className="section-faq__subtitle">
                            Have questions? We’ve got answers!
                        </p>
                    </div>
                </div>
                <DropDown />
            </motion.div>
        </section>
    );
}
