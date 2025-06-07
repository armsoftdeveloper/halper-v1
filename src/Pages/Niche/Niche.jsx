import React, { useEffect } from "react";
import "./niche.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';

// Icons
import imgNiche from "../../images/niche.png";
import niche_main from "../../images/niche_main.png";

// Components
import BadgeMobile from "../../Components/SectionBadge/badgeMobile";
import SectionBadge from "../../Components/SectionBadge/SectionBadge";
import SectionFAQ from "../../Components/SectionFAQ/SectionFAQ";
import SectionBuild from "../../Components/SectionBuild/SectionBuild";

const servicesData = [
    { icon: imgNiche, text: "Beauty & Personal Care" },
    { icon: imgNiche, text: "Teaching & Skills Based Jobs" },
    { icon: imgNiche, text: "Digital & Creative  Services" },
    { icon: imgNiche, text: "Home Services & Repairs" },
    { icon: imgNiche, text: "Marketing Automation" },
    { icon: imgNiche, text: "Skilled Trades & Manual Work" },
    { icon: imgNiche, text: "Teaching & Skills Based Jobs" },
    { icon: imgNiche, text: "Skilled Trades & Manual Work" },
    { icon: imgNiche, text: "Teaching & Skills Based Jobs" },
    { icon: imgNiche, text: "Skilled Trades & Manual Work" },
    { icon: imgNiche, text: "Business Risk & Strategy" },
    { icon: imgNiche, text: "Teaching & Skills Based Jobs" },
];

const infoBlocks = [
    { icon: "calendar", text: "Free 14-day trial" },
    { icon: "creditCard", text: "No credit card required" },
];

const iconMap = {
    calendar: <CalendarMonthIcon fontSize="small" />,
    creditCard: <CreditCardIcon fontSize="small" />,
};

export default function Niche() {
    const { setPopupOpen } = usePopup();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".col").forEach((col) => {
            observer.observe(col);
        });
    }, []);

    return (
        <div className="niche">
            <div className="niche-main">
                <div className="niche_main__left">
                    <h2 className="niche_main__heading">
                        Effortless Security for Your Small Business
                    </h2>

                    <div className="niche_main__info niche_main_info_col_display">
                        <button className="niche_main__button"
                            onClick={() => setPopupOpen(true)}
                        >
                            Try For Free Now <ArrowForwardIcon sx={{ fontSize: "28px" }} />
                        </button>
                        <div className="niche_main_info_col">
                            {infoBlocks.map(({ icon, text }, i) => (
                                <React.Fragment key={i}>
                                    <div className="niche_main__info-item">
                                        {iconMap[icon]} <span>{text}</span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="niche_main__right">
                    <img
                        src={niche_main}
                        alt="Services Phone"
                        className="niche_main__right-img"
                        loading="lazy"
                    />
                </div>

                <div className="niche_main__info niche_main_info_col_mobile">
                    <button className="niche_main__button"
                        onClick={() => setPopupOpen(true)}
                    >
                        Try For Free Now <ArrowForwardIcon sx={{ fontSize: "28px" }}
                            onClick={() => setPopupOpen(true)}
                        />
                    </button>
                    <div className="niche_main_info_col">
                        {infoBlocks.map(({ icon, text }, i) => (
                            <React.Fragment key={i}>
                                <div className="niche_main__info-item">
                                    {iconMap[icon]} <span>{text}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <section className="niche">
                <div className="inner-niche">
                    <div className="niche-typography">
                        <h1>Our Services</h1>
                        <p>
                            With Halper, <strong>managing your clients becomes seamless.</strong>{" "}
                            This AI virtual manager for small businesses streamlines appointments.
                        </p>
                    </div>

                    <div className="niche-cols-parent">
                        <div className="col-left">
                            {servicesData.map((service, index) => (
                                <div className="col" key={index}>
                                    <img
                                        src={service.icon}
                                        alt="Service Icon"
                                        className="col-img"
                                    />
                                    <div className="col-text">
                                        <button className="col-button">{service.text}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <BadgeMobile />
            <SectionBadge/>
            <SectionBuild isColored={true}/>
            <SectionFAQ />
        </div>
    );
}
