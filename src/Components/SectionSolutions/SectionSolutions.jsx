import { motion } from "framer-motion";
import img from "../../images/servicesPhone.png";
import "./solutions.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';


export default function SolutionsSection() {
    const features = [
        {
            title: "AI-Powered Task Automation",
            descStart: "Halper is the best",
            boldPart: "AI manager for solopreneurs",
            descEnd: ", automating your routine tasks like client communication, scheduling, and admin work, giving you more time to focus on what matters.",
        },
        {
            title: "Effortless Client Management",
            descStart: "With Halper,",
            boldPart: "managing your clients becomes seamless.",
            descEnd: " This AI virtual manager for small businesses streamlines appointments, follow-ups, and communication, boosting",
        },
        {
            title: "Scalable Business Strategy",
            descStart: "Halper adapts to your business needs, making it the ultimate ",
            boldPart: "AI manager for business owners.",
            descEnd: " From task management to strategic insights, Halper helps you scale and optimize your ",
        },
        {
            title: "Time-Saving Productivity Boost",
            descStart: "Halper handles your business processes efficiently,",
            boldPart: "AI manager for business owners.",
            descEnd: "so you can focus on growth. As the best AI manager for solopreneurs, it saves you time, reduces stress, and enhances overall productivity.",
        },
    ];

    const { setPopupOpen } = usePopup();

    return (
        <section className="solutions">
            <div className="solutions__gradient-bg" aria-hidden="true"></div>

            <div className="solutions__container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="solutions__title">Solutions by Halper</h2>
                    <p className="solutions__subtitle">
                        Everything you need to run your solo business — automated, organized, and always one step ahead.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="solutions__content">
                        <div className="solutions__image">
                            <img src={img} alt="Phone preview" />
                        </div>

                        <div className="solutions__features">
                            {features.map((feature, index) => (
                                <div key={index} className="solutions__feature">
                                    <div className="solutions__feature-title">
                                        <span className="solutions__icon">
                                            <CheckCircleIcon />
                                        </span>
                                        {feature.title}
                                    </div>
                                    <p className="solutions__feature-description">
                                        {feature.descStart}
                                        <b>{feature.boldPart}</b>
                                        {feature.descEnd}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="solutions__btn-container">
                    <button className="solutions__btn"
                        onClick={() => setPopupOpen(true)}
                    >
                        Try For Free Now <ArrowForwardIcon />
                    </button>

                </div>
            </div>

        </section>
    );
}
