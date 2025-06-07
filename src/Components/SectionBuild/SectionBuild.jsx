import React, { useEffect, useState } from "react";
import "./sectionBuild.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';

export default function SectionBuild({ isColored }) {
    const { setPopupOpen } = usePopup();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            },
            { threshold: 0.2 }
        );

        const element = document.querySelector(".build__content");
        if (element) observer.observe(element);
    }, []);

    return (
        <section className={`build_section ${isColored ? 'build_section--colored' : ''}`}>
            <div className="build__content fade-in">
                <div className="inner_typography">
                    <p>Build and launch today in just 3 minutes</p>
                </div>
                <div className="build__button-container">
                    <button className={`build__button ${isColored ? 'build__button--colored' : ''}`}
                        onClick={() => setPopupOpen(true)}>
                        Try For Free Now
                        <ArrowForwardIcon sx={{ fontSize: "42px" }} />
                    </button>
                </div>
            </div>
        </section>
    );
}
