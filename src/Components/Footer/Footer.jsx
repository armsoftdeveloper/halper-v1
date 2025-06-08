import "./footer.css";
import logo from "../../images/logo2.png";
import bigLogo from "../../images/halper.png";
import bottomLogo from "../../images/footer_bar.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useContactPopup } from "../../Blocks/ContactPopup/ContactPopupContext";

export default function Footer() {
    const { setContactPopupOpen } = useContactPopup();

    function toggleDropdown() {
        const dropdown = document.getElementById("lang-dropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    function selectLanguage(lang, flagUrl) {
        document.getElementById("current-lang").innerText = lang;
        document.getElementById("current-flag").src = flagUrl;
        document.getElementById("lang-dropdown").style.display = "none";
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (!e.target.closest('.lang-switch')) {
                const dropdown = document.getElementById("lang-dropdown");
                if (dropdown) dropdown.style.display = "none";
            }
        }
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <footer>
            <div className="inner-footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <img src={logo} className="footer-logo" />
                        <p className="footer-top-left-description">Lectus pretium non potenti eget tincidunt. In feugiat orci id mauris. Vitae sit cursus tellus risus.</p>
                    </div>

                    <div className="footer-top-right">
                        <button className="footer-top-right-button"
                            onClick={() => setContactPopupOpen(true)}
                        >
                            Contact Us
                            <KeyboardArrowRightIcon />
                        </button>
                        <div class="trustpilot-container">
                            <div class="trustpilot-widget"
                                data-locale="en-US"
                                data-template-id="56278e9abfbbba0bdcd568bc"
                                data-businessunit-id="6819b7821f4247651fdc9342"
                                data-style-height="52px"
                                data-style-width="100%">
                                <a href="https://www.trustpilot.com/review/halper.ai" target="_blank" rel="noopener">Trustpilot</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider sx={{ width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.4)", marginTop: "75px" }} />
                <div className="footer-lists">
                    <div className="footer-list">
                        <p className="footer-list-title">Services</p>
                        <ul>
                            <li>Client Communication & CRM Automation</li>
                            <li>Scheduling & Calendar Integration</li>
                            <li>Financial Management</li>
                            <li>Business Analytics & Insights</li>
                            <li>Marketing Automation</li>
                            <li>Inventory & Product Management</li>
                            <li>Employee & Resource Management</li>
                            <li>Mental Health & Wellbeing</li>
                            <li>Customer Success & Retention</li>
                            <li>Social Impact & Community</li>
                            <li>Business Risk & Strategy</li>
                            <li>Reporting & Feedback</li>
                            <li>External Integrations & API Connectivity</li>
                            <li>Mobile & Notifications</li>
                            <li>Cross-Platform Ads & Promotions</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <p className="footer-list-title">Solution by industry</p>
                        <ul>
                            <li>Beauty & Personal Care</li>
                            <li>Health & Wellness</li>
                            <li>Spiritual & Esoteric Services</li>
                            <li>Fitness & Wellnes</li>
                            <li>Business Support & Administration</li>
                            <li>Senior Care Service</li>
                            <li>Pet Care & Veterinary Services</li>
                            <li>Home Services & Repairs</li>
                            <li>Teaching & Skills-Based Jobs</li>
                            <li>Skilled Trades & Manual Work</li>
                            <li>Freelancers & Agencies</li>
                            <li>Sales & Real Estate</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <div className="inner-footer-list">
                            <div className="list">
                                <p className="footer-list-title">Impact with Halper</p>
                                <ul>
                                    <li>Halper Together</li>
                                    <li>Halper for Business Assosiations</li>
                                </ul>
                            </div>

                            <div className="list">
                                <p className="footer-list-title">Partnerships</p>
                                <ul>
                                    <li>Affiliate program</li>
                                    <li>Refferal Program</li>
                                    <li>Become a partner</li>
                                    <li>Ambassadors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-list">
                        <div className="inner-footer-list">
                            <div className="list">
                                <p className="footer-list-title">About</p>
                                <ul>
                                    <li>Who we are</li>
                                    <li>Careers</li>
                                    <li>Prices</li>
                                    <li>Blog</li>
                                    <li>Press</li>
                                </ul>
                            </div>

                            <div className="list">
                                <p className="footer-list-title">Support</p>
                                <ul>
                                    <li>Help Center</li>
                                    <li>Feedback</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-logo">
                    <img src={bottomLogo} />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="footer-xl-text">
                        <img src={bigLogo} />
                    </div>
                </motion.div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>©2025, HALPER PRIVACY POLICY</p>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-icon"><YouTubeIcon sx={{ fontSize: "22px" }} /></div>
                        <div className="footer-social-icon"><InstagramIcon sx={{ fontSize: "22px" }} /></div>
                        <div className="footer-social-icon"><XIcon sx={{ fontSize: "22px" }} /></div>
                        <div className="footer-social-icon"><LinkedInIcon sx={{ fontSize: "22px" }} /></div>
                        <div className="footer-social-icon"><FacebookIcon sx={{ fontSize: "22px" }} /></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
