import Rating from './Rating';
import Amenities from './Amenities';
import styles from './InformationSection.module.css';

const InformationSection = () => {
  return (
    <section className={styles.informationSection}>
      <div className={styles.mainInfo}>
        <p className={styles.texts}>
          <span>Entire home</span>
          <br />
          Juneau Vacation Home: Stunning View + Beach Access
        </p>

        <Rating />

        <a href="#" className={styles.morelink}>
          See all 24 reviews <i className="ri-arrow-right-s-line"></i>
        </a>

        <div className={styles.details}>
          <div>
            <i className="ri-door-open-line"></i> 2 bedrooms
          </div>
          <div>
            <img src="images/bath-tub(1).png" alt="Bathtub icon" /> 1 bathroom
          </div>
          <div>
            <i className="ri-group-line"></i> Sleeps 4
          </div>
          <div>
            <i className="ri-custom-size"></i> 1155 sq ft
          </div>
        </div>

        <h3 className={styles.amenitiesText}>Popular amenities</h3>
        <Amenities />
        <a href="#" className={styles.morelink}>
          See all property amenities <i className="ri-arrow-right-s-line"></i>
        </a>

        <h3 className={styles.exploreText}>Explore the area</h3>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.859325122239!2d-134.4197402846659!3d58.30193448172373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5402acfd707e3441%3A0x68bb65090e4cc27e!2sJuneau%2C%20AK%2099801%2C%20USA!5e0!3m2!1sen!2sin!4v1691479298092!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <p>
              Juneau, Alaska <br />
              <a
                href="https://www.google.com/maps?q=Juneau,+Alaska"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in a map
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
