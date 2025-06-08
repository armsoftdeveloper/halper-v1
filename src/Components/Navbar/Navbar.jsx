import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../images/logo.png";
import { fetchNavbarLinks } from "./navbarSlice";
import "./navbar.css";

const solutionsMenu = {
  byServices: [
    "Client Communication & CRM Automation",
    "Scheduling & Calendar Integration",
    "Financial Management",
    "Business Analytics & Insights",
    "Marketing Automation",
    "Inventory & Product Management",
    "Employee & Resource Management",
    "Mental Health & Wellbeing",
    "Customer Success & Retention",
    "Social Impact & Community",
    "Business Risk & Strategy",
    "Reporting & Feedback",
    "External Integrations & API Connectivity",
    "Mobile & Notifications",
    "Cross-Platform Ads & Promotions",
  ],
  byIndustry: [
    "Beauty & Personal Care",
    "Health & Wellness",
    "Spiritual & Esoteric Services",
    "Fitness & Wellness",
    "Business Support & Administration",
    "Senior Care Services",
    "Pet Care & Veterinary Services",
    "Home Services & Repairs",
    "Teaching & Skills-Based Jobs",
    "Skilled Trades & Manual Work",
    "Freelancers & Agencies",
    "Sales & Real Estate",
  ],
};

const partnersMenu = [
  "Affiliate program",
  "Referral Program",
  "Become a partner",
  "Ambassadors",
];

const resourcesMenu = ["Blog", "Press", "Get support", "Contact us"];

export default function Navbar() {
  const dispatch = useDispatch();
  const { links, status } = useSelector((state) => state.navbar);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNavbarLinks());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [mobileMenuOpen]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
      setMobileSubmenuOpen(null);
    }, 300);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (status === "loading") {
    return (
      <nav className="navbar">
        <div className="navbar__inner">
          <p>Loading...</p>
        </div>
      </nav>
    );
  }

  if (status === "failed") {
    return (
      <nav className="navbar">
        <div className="navbar__inner">
          <p>Error loading navbar links</p>
        </div>
      </nav>
    );
  }

  const renderDropdown = (key) => {
    if (key === "solutions") {
      return (
        <div className="dropdown-menu solutions-dropdown">
          <div className="dropdown-column">
            <h4 className="dropdown-title">By Services</h4>
            <ul>
              {solutionsMenu.byServices.map((item, idx) => (
                <li key={idx} className="dropdown-menu__item">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown-column">
            <h4 className="dropdown-title">By Industry</h4>
            <ul>
              {solutionsMenu.byIndustry.map((item, idx) => (
                <li key={idx} className="dropdown-menu__item">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      let items = [];
      if (key === "partners") items = partnersMenu;
      else if (key === "resources") items = resourcesMenu;
      else return null;

      return (
        <ul className="dropdown-menu">
          {items.map((item, idx) => (
            <li key={idx} className="dropdown-menu__item">{item}</li>
          ))}
        </ul>
      );
    }
  };

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenuOpen((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <div className="navbar__left">
            <Link to="/">
              <img src={logo} alt="HALPER" className="navbar__logo" />
            </Link>
            <ul className="navbar__list desktop-only" ref={dropdownRef}>
              {links.map((item, index) => {
                const label = item.label.toLowerCase();
                const hasDropdown = label === "solutions" || label === "partners" || label === "resources";

                return (
                  <li
                    key={index}
                    className="navbar__list-item"
                    onMouseEnter={() => hasDropdown && setOpenDropdown(label)}
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    {hasDropdown ? (
                      <button className="navbar__link">
                        {item.label}
                      </button>
                    ) : (
                      <Link to={item.to} className="navbar__link">
                        {item.label}
                      </Link>
                    )}
                    {openDropdown === label && renderDropdown(label)}
                  </li>
                );
              })}
            </ul>

          </div>

          <div className="navbar__right">
            <button className="navbar__btn navbar__btn--demo" type="button">
              Schedule Demo
            </button>

            <button
              className="navbar__menu-btn mobile-only"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={`mobile-menu ${isClosing ? "slide-out" : "slide-in"}`}>
          <div className="mobile-menu__header">
            <img src={logo} alt="HALPER" className="navbar__logo" />
            <button onClick={handleCloseMenu} className="mobile-menu__close">
              <CloseIcon />
            </button>
          </div>

          <ul className="mobile-menu__list">
            {links.map((item, index) => {
              const label = item.label;
              const hasSubmenu = label === "Solutions" || label === "Partners" || label === "Resources";

              return (
                <li key={index} className="mobile-menu__item">
                  {hasSubmenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(label)}
                        className="mobile-menu__button"
                        aria-expanded={mobileSubmenuOpen === label}
                      >
                        {item.label}
                        <KeyboardArrowDownIcon />
                      </button>
                      {mobileSubmenuOpen === label && (
                        <ul className="mobile-submenu">
                          {(label === "Solutions"
                            ? [...solutionsMenu.byServices, ...solutionsMenu.byIndustry]
                            : label === "Partners"
                              ? partnersMenu
                              : resourcesMenu
                          ).map((subItem, subIndex) => (
                            <li key={subIndex} className="mobile-submenu__item">
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={handleCloseMenu}
                      className="mobile-menu__button"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

        </div>
      )}
    </>
  );
}