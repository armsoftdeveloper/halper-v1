import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import TryForFreePopup from "../Blocks/TryForFreePopup/TryForFreePopup";
import { usePopup } from "../Blocks/TryForFreePopup/PopupContext";

import ContactPopup from "../Blocks/ContactPopup/ContactPopup";
import { useContactPopup } from "../Blocks/ContactPopup/ContactPopupContext";

export default function Layout() {
  const { popupOpen, setPopupOpen } = usePopup();
  const { contactPopupOpen, setContactPopupOpen } = useContactPopup();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <TryForFreePopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      <ContactPopup
        isOpen={contactPopupOpen}
        onClose={() => setContactPopupOpen(false)}
      />
    </>
  );
}
