// components/RatingReviews.tsx
import React from "react";
import styles from "./RatingReviews.module.css";

const RatingReviews = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.ratingReviews}>
          <div className={styles.ratingPart}>
            <h1>9.8/10</h1>
            <h3>Exceptional</h3>
            <p>
              24 reviews <i className="ri-error-warning-line"></i>
            </p>
            <span className={styles.verifiedText}>
              Reviews are verified unless labeled otherwise.
            </span>
          </div>

          <div className={styles.reviewsSlider}>
            {/* Input elements to handle slide change */}
            <input type="radio" name="review-slider" id="review1" checked />
            <input type="radio" name="review-slider" id="review2" />
            <input type="radio" name="review-slider" id="review3" />

            <div className={styles.reviews}>
              {/* Review Slide 1 */}
              <div className={styles.reviewSlide} id="slide1">
                <h3>10/10 Excellent</h3>
                <p>
                  A very cozy home for the two of us in a quiet area NW of town.
                  Beautiful water view. We enjoyed the art, read up on it, and
                  visited the...
                </p>
                <span>Kyle G. - Sep 25, 2024</span>
              </div>

              {/* Review Slide 2 */}
              <div className={styles.reviewSlide} id="slide2">
                <h3>10/10 Excellent</h3>
                <p>
                  The cottage was just as the pictures and description stated.
                  Nice quiet area and great view of the cove.
                </p>
                <span>Cindy B. - Sep 23, 2024</span>
              </div>

              {/* Review Slide 3 */}
              <div className={styles.reviewSlide} id="slide3">
                <h3>9.5/10 Very Good</h3>
                <p>
                  The place was nice, though a bit far from town. It was clean
                  and had a great view!
                </p>
                <span>James A. - Sep 20, 2024</span>
              </div>
            </div>

            <div className={styles.sliderControls}>
              <label htmlFor="review1" className={styles.controlBtn}></label>
              <label htmlFor="review2" className={styles.controlBtn}></label>
              <label htmlFor="review3" className={styles.controlBtn}></label>
            </div>

            <a className={styles.allReviewsLink} href="#">
              See all reviews here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingReviews;
