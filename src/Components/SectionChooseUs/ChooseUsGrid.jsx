import { useEffect, useRef } from "react";
import img1 from "../../images/im1.jpg";
import img2 from "../../images/im2.png";
import img3 from "../../images/im3.png";
import img4 from "../../images/im4.png";
import img5 from "../../images/im5.png";

export default function ChooseUsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="choose-us-inner">
      <div className="choose-us__container" ref={containerRef}>
        <div className="choose-us__left-column">
          <img src={img1} alt="Left block" />
          <div className="choose-us__column-label">
            <p>Beauty & Personal Care</p>
          </div>
        </div>

        <div className="choose-us__right-grid">
          <div className="choose-us__cell">
            <img src={img2} alt="Top Left" />
            <div className="choose-us__column-label">
              <p>Healthcare & Wellness</p>
            </div>
          </div>

          <div className="choose-us__cell">
            <img src={img3} alt="Top Right" />
            <div className="choose-us__column-label">
              <p>Home Services</p>
            </div>
          </div>

          <div className="choose-us__cell">
            <img src={img4} alt="Bottom Left" />
            <div className="choose-us__column-label">
              <p>Education & Coaching</p>
            </div>
          </div>

          <div className="choose-us__cell">
            <img src={img5} alt="Bottom Right" />
            <div className="choose-us__column-label">
              <p>Legal & Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
