import React, { useState } from "react";
import "remixicon/fonts/remixicon.css"; // Import Remix Icon CSS
import styles from "./Navbar.module.css"; // Optional, if you're using CSS modules
import RegionModal from "./RegionalModal"; // Import the modal component

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to handle modal visibility

  // Function to open/close the sidebar
  const toggleSidebar = (): void => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // Function to open the location modal
  const openLocationModal = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault(); // Prevent default anchor behavior
    console.log("opening location modal"); // This should log when the link is clicked
    setIsModalOpen(true); // Set the modal state to open
  };

  // Function to close the location modal
  const closeLocationModal = (): void => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          <a href="#" className={styles.getApp}>
            Get the app <i className="ri-download-2-line"></i>
          </a>
          <a href="#" onClick={openLocationModal}>
            <i className="ri-global-line"></i> <span id="selectedRegion"></span>
          </a>
          <a href="#">Trip Boards</a>
          <a href="#">List your property</a>
          <a href="#">Help</a>
          <a href="#">My trips</a>
          <a href="#" className={styles.signIn}>
            Sign in
          </a>

          {/* Button to toggle Sidebar */}
          <a href="#" onClick={toggleSidebar} className={styles.profileIcon}>
            <i className="ri-account-circle-line"></i>
          </a>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <aside
          className={`${styles.sidebar} ${
            isSidebarOpen ? styles.sidebarOpen : ""
          }`}
        >
          <button className={styles.closeBtn} onClick={toggleSidebar}>
            <i className="ri-close-line"></i>
          </button>
          <a href="#" onClick={openLocationModal}>
            <i className="ri-global-line"></i>{" "}
            <span id="selectedRegionSidebar"></span>
          </a>
          <a href="#">Trip Boards</a>
          <a href="#">List your property</a>
          <a href="#">Help</a>
          <a href="#">My trips</a>
          <a href="#" className={styles.signIn}>
            Sign in
          </a>
          <br />
          <a href="#" className={styles.getApp}>
            Get the app <i className="ri-download-2-line"></i>
          </a>
        </aside>
      )}

      {/* Region Modal */}
      {isModalOpen && <RegionModal closeModal={closeLocationModal} />}
    </div>
  );
};

export default Navbar;
