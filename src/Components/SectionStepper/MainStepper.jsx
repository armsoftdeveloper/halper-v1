import { useState, useEffect } from "react";
import "./stepper.css";
import Bg from "../../images/IMAGE.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';

const steps = [
  { title: "Client Communication & CRM Automation", content: "This is the content of step 1.", img: Bg },
  { title: "Scheduling & Calendar Integration", content: "Here goes the content of step 2.", img: Bg },
  { title: "Financial Management", content: "Step 3 says hello!", img: Bg },
  { title: "Business Analytics & Insights", content: "Almost done - step 4.", img: Bg },
  { title: "Marketing Automation", content: "The final step!", img: Bg },
  { title: "Inventory & Product Management", content: "The final step!", img: Bg },
  { title: "Employee & Resource Management", content: "The final step!", img: Bg },
  { title: "Customer Success & Retention", content: "The final step!", img: Bg },
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
                      <li>Sit ultricies fermentum turpis suscipit in tellus platea urna pellentesque. At tempus dignissim elit integer. Lorem ac ultrices cras platea massa ante eget enim.</li>
                      <li>Lorem ipsum dolor sit amet consectetur. Integer adipiscing mauris vitae nisi urna tempor pretium odio. Feugiat nec non magna vitae vulputate. Nisi tristique nec et consequat. </li>
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
                    <li>Sit ultricies fermentum turpis suscipit in tellus platea urna pellentesque. At tempus dignissim elit integer. Lorem ac ultrices cras platea massa ante eget enim.</li>
                    <li>Lorem ipsum dolor sit amet consectetur. Integer adipiscing mauris vitae nisi urna tempor pretium odio. Feugiat nec non magna vitae vulputate. Nisi tristique nec et consequat. </li>
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
