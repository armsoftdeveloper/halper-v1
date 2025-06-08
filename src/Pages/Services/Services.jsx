import React, { useEffect } from "react";
import "./services.css";
import img from "../../images/sImg.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Icons
import v1 from "../../images/vector_comment.png";
import v2 from "../../images/vector_calendar.png";
import v3 from "../../images/vector_money_wave.png";
import v4 from "../../images/vector-pie-chart.png";
import v5 from "../../images/vector-target.png";
import v6 from "../../images/vector-char-bar.png";
import v7 from "../../images/vector-user-check.png";
import v8 from "../../images/vector-heart.png";
import v9 from "../../images/vector_star.png";
import v10 from "../../images/vector-globe.png";
import v11 from "../../images/vector-brieft-case.png";
import v12 from "../../images/vector-bell.png";
import v13 from "../../images/vector-git-merge.png";
import v14 from "../../images/vector-play-circle.png";
import v15 from "../../images/vector-loader.png";

// Components
import BadgeMobile from "../../Components/SectionBadge/badgeMobile";
import SectionBadge from "../../Components/SectionBadge/SectionBadge";
import SectionFAQ from "../../Components/SectionFAQ/SectionFAQ";
import SectionBuild from "../../Components/SectionBuild/SectionBuild";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';

// Service items data
const servicesData = [
    { icon: v1, text: "Client Communication & CRM Automation" },
    { icon: v2, text: "Scheduling & Calendar integration" },
    { icon: v3, text: "Financial Management" },
    { icon: v4, text: "Business Analytics & Insights" },
    { icon: v5, text: "Marketing Automation" },
    { icon: v6, text: "Inventory & Products" },
    { icon: v7, text: "Employee & Resources" },
    { icon: v8, text: "Mental Health & Wellbeing" },
    { icon: v9, text: "Customer Success & Retention" },
    { icon: v10, text: "Social Impact & Community" },
    { icon: v11, text: "Business Risk & Strategy" },
    { icon: v12, text: "Client Communication & CRM Automation" },
    { icon: v13, text: "Reporting & Feedback" },
    { icon: v14, text: "External Integrations & API Connectivity" },
    { icon: v15, text: "Cross-Platform Ads & Promotions" },
];

export default function Services() {
    const { setPopupOpen } = usePopup();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".col").forEach((col) => {
            observer.observe(col);
        });
    }, []);

    return (
        <>
            <section className="services">
                <div className="inner-services">
                    <div className="services-typography">
                        <h1>services</h1>
                        <p>
                            With Halper, <strong>managing your clients becomes seamless.</strong>
                            This AI virtual manager for small businesses streamlines appointments.
                        </p>
                    </div>

                    <div className="services-cols-parent">
                        <div className="col-left">
                            {servicesData.map((service, index) => (
                                <div className="col" key={index}>
                                    <span className="icon">
                                        <img src={service.icon} alt={`Service icon ${index + 1}`} />
                                    </span>
                                    <p>{service.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="col-right">
                            <img src={img} alt="Phone preview" />
                            <div className="col-rigth-btn-box">
                                <button
                                    onClick={() => setPopupOpen(true)}
                                >
                                    Try For Free Now <ArrowForwardIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BadgeMobile />
            <SectionBadge />
            <SectionBuild isColored={true} />
            <SectionFAQ />
        </>
    );
}
