import React from "react";
import styles from "./SecondNav.module.css"; // Import the CSS module

const SecondNav: React.FC = () => {
  return (
    <section className={styles.secondNav}>
      <div className={styles.leftLinks}>
        <a href="#overview">Overview</a>
        <a href="#amenities">Amenities</a>
        <a href="#policies">Policies</a>
      </div>
    </section>
  );
};

export default SecondNav;
