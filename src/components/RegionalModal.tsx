import React, { useState, useEffect } from "react";
import styles from "./RegionalModal.module.css";

const regionCurrencyMap: Record<string, string> = {
  US: "USD",
  UK: "GBP",
  EU: "EUR",
  JP: "JPY",
};

const RegionModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>("US");
  const [currency, setCurrency] = useState<string>("USD");

  useEffect(() => {
    const savedRegion = localStorage.getItem("selectedRegion");
    const savedCurrency = localStorage.getItem("selectedCurrency");

    if (savedRegion && savedCurrency) {
      setSelectedRegion(savedRegion);
      setCurrency(savedCurrency);
    } else {
      setSelectedRegion("United States");
      setCurrency("USD");
    }
  }, []);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setCurrency(regionCurrencyMap[region] || "USD");
  };

  const handleSave = () => {
    localStorage.setItem("selectedRegion", selectedRegion);
    localStorage.setItem("selectedCurrency", currency);
    closeModal(); // Close modal when save is clicked
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={closeModal}>
            <i className="ri-close-line"></i>
          </span>
          <h3>Display Settings</h3>
        </div>
        <div className={styles.locationModalTexts}>
          <h4>Changing your region could change your rewards program.</h4>
          <p>
            To stay with your current rewards program, keep your region the
            same. Some rewards are only available in select regions.
          </p>
        </div>
        <div className={styles.selection}>
          <label htmlFor="regionSelect">Region</label>
          <select
            id="regionSelect"
            value={selectedRegion}
            onChange={handleRegionChange}
            className={styles.selectRegion}
          >
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="EU">Europe</option>
            <option value="JP">Japan</option>
          </select>

          <label htmlFor="currencyDisplay">Currency</label>
          <input
            id="currencyDisplay"
            className={styles.selectRegion}
            type="text"
            value={currency}
            readOnly
          />

          <button className={styles.selectRegion} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionModal;
