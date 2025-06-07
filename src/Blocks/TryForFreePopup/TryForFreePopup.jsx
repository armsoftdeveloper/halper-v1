import React, { useEffect, useState } from 'react';
import './TryForFreePopup.css';
import bg from "../../images/stores.png";
import CloseIcon from '@mui/icons-material/Close';

export default function TryForFreePopup({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`popup-overlay ${visible ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target.classList.contains('popup-overlay')) onClose();
      }}
    >
      <div
        className={`popup-content-try ${visible ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popupTitle"
      >
        <button
          className="popup-close-button-try"
          aria-label="Close popup"
          onClick={onClose}
        >
          <CloseIcon/>
        </button>

        <div className="popup-left-try">
          <h2 id="popupTitle" className="popup-title">
            TRY FOR FREE NOW
          </h2>
          <p className="popup-description">Download our mobile app and enjoy:</p>
          <img src={bg} alt="" />
        </div>

        <div className="popup-right-try" />
      </div>
    </div>
  );
}
