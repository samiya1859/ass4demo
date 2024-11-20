import React from "react";
import styles from "./AboutProperty.module.css";

const AboutProperty: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>About this property</h1>

      <h2>Juneau Vacation Home: Stunning View + Beach Access</h2>
      <p className={styles.propertyDescription}>
        Escape to the mountains and experience the great outdoors at this lovely
        Juneau vacation rental! Perched on the shore of Lena Cove, this
        2-bedroom, 1-bath home is the perfect getaway for those looking to enjoy
        a relaxing retreat surrounded by nature. Spend your day fishing for King
        Salmon, exploring Lena Beach and the rocky coastline, or hiking the
        nearby trails. After your outdoor adventure, kick back on the private
        deck and admire the breathtaking panoramic views!
      </p>

      <div className={styles.propertyInfo}>
        <span>--The Property--</span>
        <p>
          CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain
          Views | 2 Bicycles Provided
        </p>
        <p>
          Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin
          Bed
        </p>
      </div>

      <div className={styles.amenitiesList}>
        <div className={styles.amenitiesSection}>
          <h3>HOME HIGHLIGHTS</h3>
          <p>Flat-screen TV, dining table, washer/dryer</p>
        </div>
        <div className={styles.amenitiesSection}>
          <h3>KITCHEN</h3>
          <p>
            Fridge, stove, coffee maker, microwave, cooking basics, toaster,
            dishware/flatware, trash bags/paper towels, Crockpot
          </p>
        </div>
        <div className={styles.amenitiesSection}>
          <h3>GENERAL</h3>
          <p>
            Free WiFi, central heating, linens/towels, keyless entry, hair
            dryer, ceiling fans
          </p>
        </div>
        <div className={styles.amenitiesSection}>
          <h3>FAQ</h3>
          <p>No A/C, stairs required to access</p>
        </div>
        <div className={styles.amenitiesSection}>
          <h3>PARKING</h3>
          <p>Driveway (2 vehicles), RV parking allowed</p>
        </div>
      </div>

      <div className={styles.locationSection}>
        <h2>--The Location--</h2>
        <div className={styles.locationItem}>
          <h3>GREAT OUTDOORS</h3>
          <ul>
            <li>Lena Cove (on-site)</li>
            <li>Lena Beach Recreation Area (0.5 miles)</li>
            <li>Glacier Gardens Rainforest Adventure (10 miles)</li>
            <li>Mendenhall Glacier (10 miles)</li>
            <li>Twin Lakes (13 miles)</li>
          </ul>
        </div>

        <div className={styles.locationItem}>
          <h3>THINGS TO DO</h3>
          <ul>
            <li>Mendenhall Golf (8 miles)</li>
            <li>Dimond Park Aquatic Center (8 miles)</li>
            <li>Riverside Rotary Park (8 miles)</li>
            <li>Alaska State Museum (16 miles)</li>
            <li>Last Chance Mining Museum (18 miles)</li>
            <li>AJ Mine Gastineau Mill Tours (20 miles)</li>
          </ul>
        </div>

        <div className={styles.locationItem}>
          <h3>LOCAL FARE</h3>
          <ul>
            <li>Forbidden Peak Brewery (5 miles)</li>
            <li>The Grind Coffee Company (7 miles)</li>
            <li>Four Plates Cocina Peruana (7 miles)</li>
            <li>Sandbar & Grill (7 miles)</li>
            <li>Zerelda's Bistro (8 miles)</li>
            <li>Donna's Restaurant (9 miles)</li>
            <li>Alaskan Brewing Co. (13 miles)</li>
          </ul>
        </div>

        <div className={styles.locationItem}>
          <h3>AIRPORT</h3>
          <ul>
            <li>Juneau International Airport (9 miles)</li>
          </ul>
        </div>
      </div>

      <div className={styles.restEasySection}>
        <h2>--Rest Easy With Us--</h2>
        <p>
          Evolve makes it easy to find and book properties you'll never want to
          leave. You can relax knowing that our properties will always be ready
          for you and that we'll answer the phone 24/7. Even better, if anything
          is off about your stay, we'll make it right. You can count on our
          homes and our people to make you feel welcome--because we know what
          vacation means to you.
        </p>
      </div>

      <div className={styles.policiesSection}>
        <h2>--Policies--</h2>
        <ul className={styles.policiesList}>
          <li>No smoking</li>
          <li>No pets allowed</li>
          <li>No events, parties, or large gatherings</li>
          <li>Must be at least 25 years old to book</li>
          <li>Additional fees and taxes may apply</li>
          <li>Photo ID may be required upon check-in</li>
          <li>NOTE: The property requires stairs to access</li>
          <li>NOTE: The property does not have air conditioning</li>
          <li>
            NOTE: The property sleeps 3 guests in 2 beds, with room for 4 total
            by using the full floor mattress
          </li>
        </ul>
      </div>

      <div className={styles.managerSection}>
        <h2>Property manager</h2>
        <img
          className={styles.managerLogo}
          src="/images/manager-logo.png"
          alt="Manager Logo"
        />
        <h3>Evolve</h3>
      </div>

      <div className={styles.languagesSection}>
        <h2>Languages</h2>
        <p className={styles.languagesList}>English, French, German, Spanish</p>
      </div>
    </section>
  );
};

export default AboutProperty;
