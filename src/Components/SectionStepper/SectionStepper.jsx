import MainStepper from "./MainStepper";
import "./SectionStepper.css";
import { motion } from "framer-motion";
import TryForFreePopup from "../../Blocks/TryForFreePopup/TryForFreePopup";
import { useState } from "react";

export default function SectionStepper() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="stepper-do">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <h2 className="stepper-do__title">Our Services</h2>

          <p className="stepper-do__subtitle b-subtitle">
            With Halper, <b>managing your clients becomes seamless.</b>
          </p>

          <p className="stepper-do__subtitle">
            This AI virtual manager for small businesses streamlines appointments.
          </p>

          <div className="stepper-do__content">
            <MainStepper setPopupOpen={setPopupOpen}/>
          </div>
        </div>
      </motion.div>
      <TryForFreePopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />

    </section>
  );
}
