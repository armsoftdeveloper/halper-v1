import React, { createContext, useContext, useState } from "react";

const ContactPopupContext = createContext();

export function ContactPopupProvider({ children }) {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);

  return (
    <ContactPopupContext.Provider value={{ contactPopupOpen, setContactPopupOpen }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  return useContext(ContactPopupContext);
}
