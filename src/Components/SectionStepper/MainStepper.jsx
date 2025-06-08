import { useState, useEffect } from "react";
import "./stepper.css";
import Bg1 from "../../images/step1.png";
import Bg2 from "../../images/step2.png";
import Bg3 from "../../images/step3.png";
import Bg4 from "../../images/step4.png";
import Bg5 from "../../images/step5.png";
import Bg6 from "../../images/step6.png";
import Bg7 from "../../images/step7.png";
import Bg8 from "../../images/step8.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';

const steps = [
  { title: "Client Communication & CRM Automation", content: "HALPER centralizes all client messages from Instagram, SMS, and voice into one seamless flow. It responds instantly, updates your CRM automatically, and ensures every conversation is tracked and followed up — so no lead slips through the cracks.", img: Bg1 },
  { title: "Scheduling & Calendar Integration", content: "Clients can book, reschedule, or cancel through chat or voice. HALPER syncs with your calendar in real time, sends reminders, and prevents double bookings. Your schedule stays organized without manual effort — even when you’re off the clock.", img: Bg2 },
  { title: "Financial Management", content: "HALPER helps you track revenue, monitor payments, and stay on top of income trends. From invoices to payment confirmations, every financial detail is logged automatically, giving you a clear overview of cash flow without spreadsheets.", img: Bg3 },
  { title: "Business Analytics & Insights", content: "See what’s working in your business at a glance. HALPER shows live stats on bookings, income, message response rates, and client retention — helping you make smarter, data-backed decisions in real time.", img: Bg4 },
  { title: "Marketing Automation", content: "HALPER keeps clients engaged with automated follow ups, reactivation flows, and personalized campaigns. Whether you’re reconnecting with inactive clients or upselling a service, marketing happens on autopilot.", img: Bg5 },
  { title: "Inventory & Product Management", content: "Track products, manage stock levels, and get low-stock alerts without manual input. HALPER streamlines inventory workflows so you always know what’s on hand — whether you’re selling skincare, tools, or wellness products.", img: Bg6 },
  { title: "Employee & Resource Management", content: "Even if you grow beyond solo, HALPER makes it easy to assign tasks, manage availability, and organize service providers. Staff calendars and responsibilities stay in sync — no micromanagement required.", img: Bg7 },
  { title: "Customer Success & Retention", content: "HALPER helps you keep clients coming back. It sends personalized reminders, tracks feedback and satisfaction, and follows up automatically — so you can build long-term loyalty without chasing every message.", img: Bg8 },
];

export default function MainStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { setPopupOpen } = usePopup();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index) => {
    if (activeStep === index) {
      setActiveStep(null);
    } else {
      setActiveStep(index);
    }
  };

  return (
    <div className="stepper-wrapper">
      <div className="stepper-inner">
        <div className="stepper-left">
          {steps.map((step, index) => (
            <div key={index} >
              <div
                className={`stepper-step ${index === activeStep ? "active" : ""}`}
                onClick={() => handleClick(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleClick(index);
                }}
              >
                <p>{step.title}</p>
              </div>

              {isMobile && activeStep === index && (
                <div className="stepper-content-block fade-in">
                  <img src={step.img} alt={step.title} className="stepper-img" />
                  <div className="stepper-typography">
                    <h2 className="stepper-title">{step.title}</h2>
                    <ul>
                      <li>{step.content}</li>
                      <li>{step.content}</li>
                    </ul>
                    <div className="step-content-btn-parent">
                      <button className="stepper-typography-button"
                        onClick={() => setPopupOpen(true)}
                      >
                        Explore Now <ArrowForwardIcon />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="stepper-right">
            <div key={activeStep} className="stepper-content-block fade-in">
              <img src={steps[activeStep || 0].img} alt={steps[activeStep || 0].title} className="stepper-img" />
              <div className="stepper-typography-par">
                <div className="stepper-typography">
                  <h2 className="stepper-title">{steps[activeStep || 0].title}</h2>
                  <ul>
                    <li>{steps[activeStep || 0].content}</li>
                    <li>{steps[activeStep || 0].content}</li>
                  </ul>
                  <div className="step-content-btn-parent">
                    <button className="stepper-typography-button"
                      onClick={() => setPopupOpen(true)}
                    >
                      Explore Now <ArrowForwardIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="stepper-done">
          <button className="stepper-done-button" onClick={() => setPopupOpen(true)}>
            Try For Free Now <ArrowForwardIcon />
          </button>
        </div>
      )}

    </div>
  );
}
