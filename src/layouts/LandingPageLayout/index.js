import React, { useRef, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowSize";

import "./styles.css";

const LandingPageLayout = ({ children }) => {
  const mobileMenu = useRef();
  const { width } = useWindowWidth();

  const toggleMobileMenu = () => {
    const classNames = mobileMenu.current.className;
    if (!classNames.includes("mobileShow")) {
      mobileMenu.current.className = `${mobileMenu.current.className} mobileShow`;
    } else {
      mobileMenu.current.className = "navListWrapper";
    }
  };

  useEffect(() => {
    if (width < 1020) {
      const classNames = mobileMenu.current.className;
      if (classNames.includes("mobileShow")) {
        mobileMenu.current.className = "navListWrapper";
      }
    }
  }, [width]);
  return (
    <div>
      <div className="header">
        <img src="images/logo.png" alt="Logo" className="logoImage" />
        <div ref={mobileMenu} className="navListWrapper">
          <p className="navText">
            <img src="images/icons/phone.png" alt="Phone" className="navIcon" />
            (262) 555-0131
          </p>
          <p className="navText">
            <img src="images/icons/mail.png" alt="Mail" className="navIcon" />
            hey@ygritte.com
          </p>
          <ul className="navList">
            <li className="navItem navItem_highlighted">About Us</li>
            <li className="navItem">Experts</li>
            <li className="navItem">Services</li>
            <li className="navItem">Prices</li>
            <li className="navItem">Portfolio</li>
            <li className="navItem">Contact</li>
          </ul>
        </div>
        <button className="headerBookNowBtn">Book Now</button>
        <img
          src="images/icons/menu.png"
          alt="Mobile Menu"
          className="mobileMenuIcon"
          onClick={toggleMobileMenu}
        />
      </div>
      {children}
    </div>
  );
};

export default LandingPageLayout;
