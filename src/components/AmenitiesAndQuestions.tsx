import styles from "./AmenitiesAndQuestions.module.css";

const AmenitiesAndQuestions = () => {
  return (
    <section>
      {/* Amenities Section */}
      <div className={styles.amenitiesPart}>
        <h2>Amenities</h2>
        <div className={styles.amenitiesGrid}>
          <div className={styles.amenityItem}>
            <div className={styles.icon}>
              <img src="/images/kitchen-set.png" alt="Kitchen" />
            </div>
            <span>Kitchen</span>
          </div>
          <div className={styles.amenityItem}>
            <div className={styles.icon}>
              <img src="/images/drying.png" alt="Washer" />
            </div>
            <span>Washer</span>
          </div>
          <div className={styles.amenityItem}>
            <div className={styles.icon}>
              <img src="/images/tumble-dryer.png" alt="Dryer" />
            </div>
            <span>Dryer</span>
          </div>
          <div className={styles.amenityItem}>
            <div className={styles.icon}>
              <img src="/images/outdoor.png" alt="Outdoor Space" />
            </div>
            <span>Outdoor Space</span>
          </div>
          <div className={styles.amenityItem}>
            <div className={styles.icon}>
              <img src="/images/parking-area.png" alt="Parking available" />
            </div>
            <span>Parking available</span>
          </div>
          <div className={styles.amenityItem}>
            <div className={styles.icon}>
              <img src="/images/ocean.png" alt="Ocean view" />
            </div>
            <span>Ocean view</span>
          </div>
        </div>
        <a href="#" className={styles.seeAll}>
          See all 34 amenities
        </a>
      </div>

      {/* Question Box Section */}
      <div className={styles.questionContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Have a question?</h1>
          <span className={styles.betaBadge}>
            <img src="/images/beta.png" alt="Beta" />
          </span>
        </div>
        <p className={styles.description}>
          Get instant answers with AI powered search of property information and
          reviews.
        </p>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>
            <i className="ri-search-line"></i>
          </span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Ask a question"
            defaultValue="Is there free parking?"
          />
          <button className={styles.searchButton}>
            <i className="ri-search-line"></i>
          </button>
        </div>
      </div>

      {/* Damage and Cancellation Section */}
      <div className={styles.damagePart}>
        <h2 className={styles.credentialHeading}>
          Damage and Cancellation Policy
        </h2>
        <p>
          Learn about the property damage policy and how cancellations are
          handled.
        </p>
        <div className={styles.timelineContainer}>
          <div className={styles.line}></div>
          <div className={`${styles.circle} ${styles.today}`}>
            <span className={styles.label}>Today</span>
          </div>
          <div className={`${styles.circle} ${styles.middle}`}>
            <span className={styles.label}>Middle</span>
          </div>
          <div className={`${styles.circle} ${styles.checkin}`}>
            <span className={styles.label}>Check-in</span>
          </div>
          <div className={styles.refundText}>
            <span>Refundable</span>
            <span>Non-Refundable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesAndQuestions;
