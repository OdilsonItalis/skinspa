import React from "react";
import styles from "./styles.module.css";

const LandingPageLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="images/logo.png" alt="Logo" className={styles.logoImage} />
        <div className={styles.headerNavWrapper}>
          <p className={styles.navText}>
            <img
              src="images/icons/phone.png"
              alt="Phone"
              className={styles.navIcon}
            />
            (262) 555-0131
          </p>
          <p className={styles.navText}>
            <img
              src="images/icons/mail.png"
              alt="Mail"
              className={styles.navIcon}
            />
            hey@ygritte.com
          </p>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.navItem_highlighted}`}>
              About Us
            </li>
            <li className={styles.navItem}>Experts</li>
            <li className={styles.navItem}>Services</li>
            <li className={styles.navItem}>Prices</li>
            <li className={styles.navItem}>Portfolio</li>
            <li className={styles.navItem}>Contact</li>
          </ul>
          <button className={styles.bookNowBtn}>Book Now</button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LandingPageLayout;
