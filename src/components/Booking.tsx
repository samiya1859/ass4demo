import { useState } from 'react';
import TravelersModal from './TravelersModal';
import styles from './BookingSection.module.css';

const Booking = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.booking}>
      <div className={styles.priceInfo}>
        <h3>
          $134 <span>per night</span>
        </h3>
        <p className={styles.freeCancellation}>
          Free cancellation <i className="ri-error-warning-line"></i> before Mon. Nov 4
        </p>
        <div className={styles.datePickerContainer}>
          <div className={styles.dateGroup}>
            <label htmlFor="start-date">Start date</label>
            <input type="date" id="start-date" />
          </div>
          <div className={styles.dateGroup}>
            <label htmlFor="end-date">End date</label>
            <input type="date" id="end-date" />
          </div>
        </div>
        <div
          className={styles.selectWrapper}
          onClick={() => setModalOpen(true)}
        >
          <span>Travelers</span>
        </div>
        <TravelersModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default Booking;
