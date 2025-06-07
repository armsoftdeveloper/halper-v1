import React, { useState, useEffect } from "react";
import "./ContactPopup.css";
import CloseIcon from '@mui/icons-material/Close';

export default function ContactPopup({ isOpen, onClose }) {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
            const timer = setTimeout(() => setVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
            setSubmitted(false);
            setShowThankYou(false);
            const timer = setTimeout(() => setShow(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Через 300мс показываем thank-you
        setTimeout(() => setShowThankYou(true), 300);
    };

    if (!show) return null;

    return (
        <div
            className={`popup-overlay ${visible ? "open" : ""}`}
            onClick={(e) => e.target.classList.contains("popup-overlay") && onClose()}
        >
            <div className={`popup-content-contact ${visible ? "open" : ""} ${submitted ? "submitted" : ""}`}>
                <div className="contact-mobile">
                    <div className="mobile-title">
                        <h2 className="contact-title">Get in touch</h2>
                        <button className="popup-close-button" aria-label="Close popup" onClick={onClose}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div className="mobile-description">
                        <p className="contact-description">
                            We’d love to hear from you! Whether you have a question, feedback, or a business inquiry — we’re here to help.
                        </p>

                    </div>
                </div>

                <button className="popup-close-button desktop-contact-none" aria-label="Close popup" onClick={onClose}>
                    <CloseIcon />
                </button>

                <div className="contact-popup-left">
                    <span className="image-text">IMAGE</span>
                </div>

                <div className="contact-popup-right">
                    <div className={`submitted-block ${submitted ? "slide-up" : ""} ${showThankYou ? "hidden" : ""}`}>
                        <h2 className="contact-title desktop-contact-none">Get in touch</h2>
                        <p className="contact-description desktop-contact-none">
                            We’d love to hear from you! Whether you have a question, feedback, or a business inquiry — we’re here to help.
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name*"
                                required
                                className="contact-input"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                required
                                className="contact-input"
                            />
                            <select name="option" required className="contact-select">
                                <option value="">Select an option</option>
                                <option value="A">Option A</option>
                                <option value="B">Option B</option>
                            </select>

                            <label className="contact-checkbox-label">
                                <input type="checkbox" required className="contact-checkbox" />
                                <span className="checkbox-text">
                                    I agree to the Terms of Service and Privacy Policy
                                </span>
                            </label>

                            <button type="submit" className="contact-submit-button">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className={`thank-you-message ${showThankYou ? "slide-up-fade-in" : "hidden"}`}>
                        <h3>Thank you!</h3>
                        <p>Thank you for reaching out! We’ll get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
