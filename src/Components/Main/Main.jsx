import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./main.css";
import bgDesktop from "../../images/header_picture.png";
import meta from "../../images/Meta.png";
import instagram from "../../images/Instagram.png";
import telegram from "../../images/Telegram.png";
import tiktok from "../../images/Tiktok.png";
import whatsapp from "../../images/Whatsapp.png";
import calendar from "../../images/Calendar.png";

import meta_vector from "../../images/meta_vector.png";
import instagram_vector from "../../images/instagram_vector.png";
import telegram_vector from "../../images/telegram_vector.png";
import tiktok_vector from "../../images/tiktok_vecot.png";
import whatsapp_vector from "../../images/whatsapp_vector.png";
import calendar_vector from "../../images/calendar_vector.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { fetchMainData } from './mainSlice';
import { usePopup } from '../../Blocks/TryForFreePopup/PopupContext';


const iconMap = {
  calendar: <CalendarMonthIcon fontSize="small" />,
  creditCard: <CreditCardIcon fontSize="small" />,
};

const imgMap = {
  meta,
  instagram,
  telegram,
  tiktok,
  whatsapp,
  calendar,
};

export default function Main() {
  const { setPopupOpen } = usePopup();

  const dispatch = useDispatch();
  const {
    headings,
    subtext,
    buttonText,
    infoBlocks,
    footer,
    status,
    error,
  } = useSelector(state => state.main);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMainData());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <main className="main">
      <div className="main__inner">
        {headings.map(({ highlight, normal }, i) => (
          <div key={i} className="main__row">
            <h1 className={`main__text main__text--highlight ${i === 1 ? 'main__text--highlight-secondary' : ''}`}>
              {highlight}
            </h1>
            <h1 className="main__text">{normal}</h1>
          </div>
        ))}

        <p className="main__subtext">
          <span className="main__subtext--bold">{subtext.bold}</span> {subtext.normal}
        </p>

        <div className="main__button-wrapper">
          <button className="main__button" onClick={() => setPopupOpen(true)}>
            {buttonText} <ArrowForwardIcon />
          </button>
        </div>

        <div className="main__info">
          {infoBlocks.map(({ icon, text }, i) => (
            <React.Fragment key={i}>
              <div className="main__info-item">
                {iconMap[icon]} {text}
              </div>
              {i === 0 && <span className="main__info-separator">|</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="main__footer_par">
          <div className="main__footer">
            <div className="main__footer-inner">
              <div className="main__footer-inner-left">
                <p className="description">{footer.leftDescription}</p>
              </div>
              <div className="main__footer-inner-image">
                <img src={bgDesktop} className="image" />
              </div>
              <div className="main__footer-inner-right">
                <p className="title">{footer.rightTitle}</p>
                <p className="description">{footer.rightDescription}</p>
                <div className="main__footer-inner-right-icons-bar">
                  {footer.socialIcons.map(({ src, alt }, i) => (
                    <div key={i} className="icon">
                      <img src={imgMap[src]} alt={alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-mobile-footer">
          <div className='mobile-top'>
            <p className="description">{footer.leftDescription}</p>
          </div>
          <div className='mobile-bottom'>
            <p className="description">{footer.rightTitle}{footer.rightDescription}</p>
          </div>
          <div className='mobile-icons-parent'>
            <div className="icons">
              <div className="icon">
                <img src={meta_vector} />
              </div>
              <div className="icon">
                <img src={instagram_vector} />
              </div>
              <div className="icon">
                <img src={telegram_vector} />
              </div>
              <div className="icon">
                <img src={tiktok_vector} />
              </div>
              <div className="icon">
                <img src={whatsapp_vector} />
              </div>
              <div className="icon">
                <img src={calendar_vector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
