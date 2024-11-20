import styles from './RoomDescription.module.css';

const RoomDescription = () => {
  return (
    <section className={styles.roomDescription}>
      <div className={styles.descriptionContainer}>
        <h1>Rooms & Beds</h1>
        <h2>2 Bedrooms (Sleeps 4)</h2>
        <div className={styles.bedroomNum}>
          <div className={styles.bed}>
            <h3>Bedroom 1</h3>
            <img src="images/double-bed.png" alt="Queen Bed" />
            <span>1 Queen Bed</span>
          </div>
          <div className={styles.bed}>
            <h3>Bedroom 2</h3>
            <img src="images/single-bed.png" alt="Twin Bed" />
            <span>1 Twin Bed</span>
          </div>
        </div>
        <hr className={styles.hr} />
        <h2>1 Bathroom</h2>
        <h3>Full Bathroom</h3>
        <hr className={styles.hr} />
        <h1>Spaces</h1>
        <ul className={styles.spaceNames}>
          <li>
            <img src="images/deck.png" alt="Deck" />
            Deck or Patio
          </li>
          <li>
            <img src="images/kitchen-set.png" alt="Kitchen" />
            Kitchen
          </li>
          <li>
            <img src="images/balcony.png" alt="Balcony" />
            Balcony
          </li>
          <li>
            <img src="images/gardening.png" alt="Garden" />
            Garden
          </li>
        </ul>
        <a href="#">See all rooms and beds details</a>
      </div>
    </section>
  );
};

export default RoomDescription;
