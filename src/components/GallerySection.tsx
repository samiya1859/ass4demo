import { FC } from "react";
import styles from "./GallerySection.module.css";

interface Image {
  url: string;
  alt: string;
}

const images: Image[] = [
  { url: "http://localhost:3001/images/1731997171500-2.jpg", alt: "Image 1" },
  { url: "http://localhost:3001/images/1731998540891-1.jpg", alt: "Image 2" },
  { url: "http://localhost:3001/images/1731999088773-4.jpg", alt: "Image 3" },
  { url: "http://localhost:3001/images/1731999107374-7.jpg", alt: "Image 4" },
  { url: "http://localhost:3001/images/1731999125186-9.jpg", alt: "Image 5" },
  { url: "http://localhost:3001/images/1731997171500-2.jpg", alt: "Image 6" },
  { url: "http://localhost:3001/images/1731997171500-2.jpg", alt: "Image 7" },
  { url: "http://localhost:3001/images/1731997171500-2.jpg", alt: "Image 7" },
  { url: "http://localhost:3001/images/1731997171500-2.jpg", alt: "Image 7" },
];

const GallerySection: FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHead}>
        <a href="#">
          <i className="ri-arrow-left-line"></i> See all Properties
        </a>
        <div className="buttons">
          <button>
            <i className="ri-share-2-line"></i> Share
          </button>
          <button>
            {" "}
            <i className="ri-heart-3-line"></i> Save
          </button>
        </div>
      </div>

      {/* Large screen gallery */}
      <div className={styles.gallery}>
        <div
          className={styles.mainImage}
          style={{ backgroundImage: `url(${images[0].url})` }}
        >
          {/* Optional: Add any overlay text or button inside the main image */}
        </div>

        <div className={styles.sideImages}>
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className={styles.sideImage}
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Small screen gallery
      <div className={styles.gallerySm}>
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className={styles[`mainImage${index + 1}`]}>
            <img src={image.url} alt={image.alt} />
            {index === 1 && (
              <button className={styles.overlayButtonSm}>
                <i className="ri-image-line"></i> {images.length - 2}+
              </button>
            )}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default GallerySection;
