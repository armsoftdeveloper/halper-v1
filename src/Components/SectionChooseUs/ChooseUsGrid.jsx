import { useEffect, useRef } from "react";
import img1 from "../../images/choose1.png";
import img2 from "../../images/choose2.png";
import img3 from "../../images/choose3.png";
import img4 from "../../images/choose4.png";
import img5 from "../../images/choose5.png";

const items = [
  { img: img1, alt: "Beauty & Personal Care", label: "Beauty & Personal Care", isLeftColumn: true },
  { img: img2, alt: "Healthcare & Wellness", label: "Healthcare & Wellness" },
  { img: img3, alt: "Home Services", label: "Home Services" },
  { img: img4, alt: "Education & Coaching", label: "Education & Coaching" },
  { img: img5, alt: "Legal & Consulting", label: "Legal & Consulting" },
];

export default function ChooseUsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerInstance.unobserve(entry.target);
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
          <img src={items[0].img} alt={items[0].alt} />
          <div className="choose-us__column-label">
            <p>{items[0].label}</p>
          </div>
        </div>

        <div className="choose-us__right-grid">
          {items.slice(1).map(({ img, alt, label }, idx) => (
            <div key={idx} className="choose-us__cell">
              <img src={img} alt={alt} />
              <div className="choose-us__column-label">
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
