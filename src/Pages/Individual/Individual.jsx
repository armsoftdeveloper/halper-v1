import React, { useEffect } from "react";
import "./individual.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditCardIcon from "@mui/icons-material/CreditCard";

// Icons
import niche_main from "../../images/individual.png";
import indImg from "../../images/ind.png";
// Components
import BadgeMobile from "../../Components/SectionBadge/badgeMobile";
import SectionBadge from "../../Components/SectionBadge/SectionBadge";
import SectionFAQ from "../../Components/SectionFAQ/SectionFAQ";
import SectionStepper from "../../Components/SectionStepper/SectionStepper";
import SectionSwiper from "../../Components/SectionSwiper/SectionSwiper";
import SectionCalculator from "../../Components/SectionCalculator/SectionCalculator";
import SectionPlan from "../../Components/SectionPlan/SectionPlan";
import SectionBuild from "../../Components/SectionBuild/SectionBuild";

import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';

const infoBlocks = [
    { icon: "calendar", text: "Free 14-day trial" },
    { icon: "creditCard", text: "No credit card required" },
];

export default function Individual() {
    const { setPopupOpen } = usePopup();

    return (
        <div className="individual-parent">
            <div className="individual-main">
                <div className="individual_main__left">
                    <h2 className="individual_main__heading">
                        Effortless Security for Your Small Business
                    </h2>

                    <div className="individual_main__info individual_main_info_col_display">
                        <button className="individual_main__button"
                            onClick={() => setPopupOpen(true)}
                        >
                            Try For Free Now <ArrowForwardIcon sx={{ fontSize: "28px" }} />
                        </button>
                        <div className="individual_main_info_col">
                            <div className="individual_main__info-item">
                                <CalendarMonthIcon /> <span>Free 14-day trial</span>
                                <CreditCardIcon /> <span>No credit card required</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="individual_main__right">
                    <img
                        src={niche_main}
                        alt="Services Phone"
                        className="individual_main__right-img"
                        loading="lazy"
                    />
                </div>

                <div className="individual_main__info individual_main_info_col_mobile">
                    <button className="individual_main__button"
                        onClick={() => setPopupOpen(true)}
                    >
                        Try For Free Now <ArrowForwardIcon sx={{ fontSize: "28px" }} />
                    </button>
                    <div className="individual_main_info_col">

                    </div>
                </div>
            </div>

            <section className="individual">
                <div className="inner-individual">
                    <div className="individual-typography">
                        <h1>Conversations that drive results</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tristique turpis tristique nunc euismod.
                        </p>
                    </div>

                    <div className="individual-cols-parent">
                        <div className="col-parent">
                            <div className="col">
                                <h1>50%</h1>
                                <p>Lorem ipsum dolor </p>
                            </div>
                            <div className="col">
                                <h1>4X</h1>
                                <p>Lorem ipsum dolor </p>
                            </div>
                        </div>

                        <div className="col-parent">
                            <div className="col">
                                <h1>50%</h1>
                                <p>Lorem ipsum dolor </p>
                            </div>
                            <div className="col">
                                <h1>4X</h1>
                                <p>Lorem ipsum dolor </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="security-section">
                <div class="security-content-mobile">
                    <h2 class="security-title">Security</h2>
                    <p class="security-subtitle">
                        You focus on what matters — Halper protects your data.
                    </p>
                    <div class="security-image">
                        <img src={indImg} alt="Man holding phone" />
                    </div>
                    <div class="security-text">
                        <p class="security-description">
                            Your Business Data — Safe, Secure, and Protected.<br />
                            In today’s digital world, privacy and protection aren’t optional —
                            they’re expected. That’s why Halper is built with enterprise-grade
                            security and privacy protocols designed to keep your business, your
                            clients, and your data safe.
                        </p>
                        <p class="security-description">
                            Whether it’s encrypted conversations, secure payment processing, or
                            GDPR-compliant data handling, Halper ensures everything runs securely —
                            so you can focus on running your business.
                        </p>
                        <button class="security-button"
                            onClick={() => setPopupOpen(true)}
                        >Try For Free Now <ArrowForwardIcon /></button>
                    </div>
                </div>
                <div class="security-content">
                    <div class="security-image">
                        <img src={indImg} alt="Man holding phone" />
                    </div>
                    <div class="security-text">
                        <h2 class="security-title">Security</h2>
                        <p class="security-subtitle">
                            You focus on what matters — Halper protects your data.
                        </p>
                        <p class="security-description">
                            Your Business Data — Safe, Secure, and Protected.<br />
                            In today’s digital world, privacy and protection aren’t optional —
                            they’re expected. That’s why Halper is built with enterprise-grade
                            security and privacy protocols designed to keep your business, your
                            clients, and your data safe.
                        </p>
                        <p class="security-description">
                            Whether it’s encrypted conversations, secure payment processing, or
                            GDPR-compliant data handling, Halper ensures everything runs securely —
                            so you can focus on running your business.
                        </p>
                        <button class="security-button"
                            onClick={() => setPopupOpen(true)}
                        >Try For Free Now <ArrowForwardIcon /></button>
                    </div>
                </div>
            </section>

            <SectionStepper/>
            <SectionSwiper/>
            <SectionCalculator/>
            <SectionPlan/>
            <BadgeMobile />
            <SectionBadge />
            <SectionBuild/>
            <SectionFAQ />
        </div>
    );
}
