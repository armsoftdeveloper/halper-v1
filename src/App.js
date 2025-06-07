import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home/Home";
import Services from "./Pages/Services/Services";
import Niche from "./Pages/Niche/Niche";
import Individual from "./Pages/Individual/Individual";
import Blog from "./Pages/Blog/Blog";
import { PopupProvider } from "./Blocks/TryForFreePopup/PopupContext";

import { ContactPopupProvider } from "./Blocks/ContactPopup/ContactPopupContext";
import ContactPopup from "./Blocks/ContactPopup/ContactPopup";

export default function App() {
  return (
    <PopupProvider>
      <ContactPopupProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="niche" element={<Niche />} />
            <Route path="individual" element={<Individual />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
        <ContactPopup />
      </ContactPopupProvider>
    </PopupProvider>
  );
}
