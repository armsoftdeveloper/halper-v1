import React, { useState, useEffect, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./calculator.css";

const valMap = [10, 50, 250, 500, 1000];

const industries = {
  "Beauty & Personal Care": { multiplier: 0.05, niches: ["Hairdresser", "Hairstylist", "Cosmetologist", "Nail Technician", "Massage Therapist", "Estheticians and Skincare Specialist", "Barber", "Makeup Artist", "Lash Technician", "Permanent Makeup Artist", "Waxing Specialist", "Spray Tan Technician", "Other"] },
  "Health & Wellness": { multiplier: 0.17, niches: ["Psychologist", "Nutritionist", "Physical Therapist", "Naturopath", "Life Coach", "Mental Health Counselor", "Other"] },
  "Spiritual & Esoteric Services": { multiplier: 0.08, niches: ["Numerologist", "Astrologist", "Tarot Reader", "Energy Healer", "Reiki Practitioner", "Other"] },
  "Fitness & Wellness": { multiplier: 0.13, niches: ["Personal Trainer", "Yoga Instructor", "Pilates Instructor", "Zumba Instructor", "Martial Arts Coache", "Spin Instructor", "CrossFit Coache", "Nutritionist", "Physical Therapist", "Meditation/Mindfulness Coach", "Other"] },
  "Business Support & Administration": { multiplier: 0.25, niches: ["Personal Assistant", "Executive Assistant", "Secretary", "Office Manager", "Administrative Coordinator", "Business Consultant", "Other"] },
  "Senior Care Services": { multiplier: 0.21, niches: ["Caregiver", "Home Health Aide", "Personal Care Assistant", "Live-In Caregiver", "Companionship Provider", "Geriatric Nurse", "Physical Therapist", "Occupational Therapist", "Speech Therapist", "Memory Care Specialist"] },
  "Pet Care & Veterinary Services": { multiplier: 0.27, niches: ["Groomer", "Dog Walker", "Pet Sitter", "Pet Trainer", "Pet Behaviorist", "Pet Daycare Owner", "Veterinarian", "Other"] },
  "Home Services & Repairs": { multiplier: 0.24, niches: ["Landscaper", "Carpenter", "Electrician", "Plumber", "HVAC Technician", "Painter", "Pest Control Specialist", "Handymen", "Gardener", "Pool Maintenance Technician", "Other"] },
  "Teaching & Skills-Based Jobs": { multiplier: 0.11, niches: ["Language Tutor (English, French, Spanish, etc.)", "Art Teacher (painting, drawing)", "Piano Teacher", "Guitar Instructor", "Dance Instructor (ballet, hip-hop, Latin)", "Acting Coach", "Chess Coach", "Other"] },
  "Skilled Trades & Manual Work": { multiplier: 0.12, niches: ["Welder", "Roofer", "Mechanic", "Tailors/Seamstresse", "Blacksmith", "Upholsterer", "Watch Repair Specialist", "Locksmith", "Auto Detailer", "Boat Repair Specialist"] },
};

export default function Calculator() {
  const [industry, setIndustry] = useState("");
  const [niche, setNiche] = useState("");
  const [averageSize, setAverageSize] = useState(0);
  const [ticketSize, setTicketSize] = useState(0);
  const [usesTool, setUsesTool] = useState(true);
  const [location, setLocation] = useState("USA");
  const [nicheMultiplier, setNicheMultiplier] = useState(1);

  const avgRangeRef = useRef(null);
  const ticketRangeRef = useRef(null);

  const avgAppointments = valMap[averageSize];
  const ticket = valMap[ticketSize];

  const selectedIndustry = industries[industry];
  const industryMultiplier = selectedIndustry?.multiplier || 0.1;

  const locationMap = { USA: 1, UK: 1, EUROPE: 0.65, CANADA: 1 };
  const locationValue = locationMap[location] || 1;

  useEffect(() => {
    if (niche) {
      const random = Math.random() * (1.15 - 0.85) + 0.85;
      setNicheMultiplier(parseFloat(random.toFixed(0)));
    }
  }, [niche]);

  // Update background of sliders
  const updateSliderBackground = (rangeEl) => {
    if (!rangeEl) return;
    const min = rangeEl.min ? parseFloat(rangeEl.min) : 0;
    const max = rangeEl.max ? parseFloat(rangeEl.max) : 100;
    const val = parseFloat(rangeEl.value);
    const percent = ((val - min) / (max - min)) * 100;
    rangeEl.style.setProperty('--range-percent', `${percent}%`);
  };

  useEffect(() => {
    updateSliderBackground(avgRangeRef.current);
    updateSliderBackground(ticketRangeRef.current);
  }, [averageSize, ticketSize]);

  const appointments = avgAppointments;
  let savings =
    appointments *
    industryMultiplier *
    nicheMultiplier *
    locationValue *
    appointments *
    12 *
    ticket / 120;

  if (!usesTool) savings *= 0.8;

  const hours = (
    appointments *
    industryMultiplier *
    nicheMultiplier *
    12
  ).toFixed(0);

  return (
    <div className="calculator">
      <form className="calculator__form">
        {/* --- Selects --- */}
        <div className="form-group">
          <label htmlFor="industry">Select your industry</label>
          <select id="industry" className="custom-select" value={industry} onChange={(e) => { setIndustry(e.target.value); setNiche(""); }}>
            <option value="" disabled>Select your industry</option>
            {Object.keys(industries).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="niche">Select your niche</label>
          <select id="niche" className="custom-select" value={niche} onChange={(e) => setNiche(e.target.value)} disabled={!selectedIndustry}>
            <option value="" disabled>{selectedIndustry ? "Select your niche" : "Choose industry first"}</option>
            {selectedIndustry?.niches.map((n, i) => (
              <option key={i} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Select your location</label>
          <select id="location" className="custom-select" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="USA">USA , UK , CANADA</option>
            <option value="EUROPE">Europe</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="range-control">
          <div className="custom-range-wrapper">
            <div className="range-title">Average Appointments per Month</div>
            <input
              ref={avgRangeRef}
              type="range"
              min={0}
              max={valMap.length - 1}
              step={1}
              value={averageSize}
              onChange={(e) => setAverageSize(Number(e.target.value))}
              className="custom-range"
            />
            <div className="steps">{valMap.map((val) => (<label key={val}>{val}</label>))}</div>
          </div>

          <div className="custom-range-wrapper">
            <div className="range-title">Average Ticket Size</div>
            <input
              ref={ticketRangeRef}
              type="range"
              min={0}
              max={valMap.length - 1}
              step={1}
              value={ticketSize}
              onChange={(e) => setTicketSize(Number(e.target.value))}
              className="custom-range"
            />
            <div className="steps">{valMap.map((val) => (<label key={val}>{val}</label>))}</div>
          </div>
        </div>

      </form>

      {/* --- Results --- */}
      <div className="calculator__result">
        <h3>Estimated Annual Savings</h3>
        <div className="result-boxes">
          <div className="result-box">
            <div className="result-label">Hours</div>
            <div className="result-value">{hours}</div>
          </div>
          <div className="result-box">
            <div className="result-label">Dollar ($)</div>
            <div className="result-value">{savings.toFixed(0)}</div>
          </div>
        </div>
        <div className="result-note-container">
          <p className="result-note">Estimates are based on industry averages.</p>
          <p className="result-note">Adjust sliders and settings for tailored results.</p>
        </div>
        <button className="calculator__button" type="button">
          See all Categories <ArrowForwardIcon sx={{ fontSize: "24px" }} />
        </button>
      </div>
    </div>
  );
}
