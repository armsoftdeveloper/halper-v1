import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./main.css";
import { motion } from 'framer-motion';

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

  const sliderImages = [bgDesktop, bgDesktop, bgDesktop, bgDesktop];

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
          <motion.div
            key={i}
            className="main__row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <h1 className={`main__text main__text--highlight ${i === 1 ? 'main__text--highlight-secondary' : ''}`}>
              {highlight}
            </h1>
            <h1 className="main__text">{normal}</h1>
          </motion.div>
        ))}

        <motion.div
          className="main__subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p><span className="main__subtext--bold">{subtext.bold}</span> {subtext.normal}</p>
        </motion.div>

        <motion.div
          className="main__button-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="main__button" onClick={() => setPopupOpen(true)}>
            {buttonText} <ArrowForwardIcon />
          </button>
        </motion.div>

        <motion.div
          className="main__info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } }
          }}
        >
          {infoBlocks.map(({ icon, text }, i) => (
            <React.Fragment key={i}>
              <div className="main__info-item">
                {iconMap[icon]} {text}
              </div>
              {i === 0 && <span className="main__info-separator">|</span>}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          className="main__footer_par"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="main__footer">
            <div className="main__footer-inner">
              <div className="main__footer-inner-left">
                <p className="description">{footer.leftDescription}</p>
              </div>
              <div className="main__footer-inner-image">
                <Swiper
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                >
                  {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} className="image" alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="main__footer-inner-right">
                <p className="title">{footer.rightTitle}</p>
                <p className="description">{footer.rightDescription}</p>
                <div className="main__footer-inner-right-icons-bar">
                  {footer.socialIcons.map(({ src, alt }, i) => (
                    <motion.div
                      key={i}
                      className="icon"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img src={imgMap[src]} alt={alt} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="main-mobile-footer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className='mobile-top'>
          <p className="description">{footer.leftDescription}</p>
        </div>
        <div className='mobile-bottom'>
          <p className="description">{footer.rightTitle}{footer.rightDescription}</p>
        </div>
        <div className='mobile-icons-parent'>
          <div className="icons">
            {[meta_vector, instagram_vector, telegram_vector, tiktok_vector, whatsapp_vector, calendar_vector].map((img, i) => (
              <motion.div
                className="icon"
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img} alt="icon" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
