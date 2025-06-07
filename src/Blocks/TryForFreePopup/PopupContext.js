import React, { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ popupOpen, setPopupOpen }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
