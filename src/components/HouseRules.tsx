import styles from "./HouseRules.module.css";

const HouseRules = () => {
  return (
    <section>
      {/* House Rules */}
      <div className={styles.houseRulesPart}>
        <h2 className={styles.credentialHeading}>House Rules</h2>
        <div className={styles.houseRules}>
          <div className={styles.ruleContent}>
            <span className={styles.ruleTitle}>Check in after 3:00 PM</span>
            <span className={styles.ruleTitle}>Check out before 11:00 AM</span>
          </div>
          <div className={styles.ruleItem}>
            <div className={styles.icon}>
              <img src="/images/stroller.png" alt="Children" />
            </div>
            <div className={styles.ruleContent}>
              <span className={styles.ruleTitle}>Children</span>
              <span className={styles.ruleDescription}>
                Children allowed: ages 0-17
              </span>
            </div>
          </div>
          <div className={styles.ruleItem}>
            <div className={styles.icon}>
              <img src="/images/parties.png" alt="Events" />
            </div>
            <div className={styles.ruleContent}>
              <span className={styles.ruleTitle}>Events</span>
              <span className={styles.ruleDescription}>No events allowed</span>
            </div>
          </div>
          <div className={styles.ruleItem}>
            <div className={styles.icon}>
              <img src="/images/no-pets.png" alt="Pets" />
            </div>
            <div className={styles.ruleContent}>
              <span className={styles.ruleTitle}>Pets</span>
              <span className={styles.ruleDescription}>No pets allowed</span>
            </div>
          </div>
          <div className={styles.ruleItem}>
            <div className={styles.icon}>
              <img src="/images/no-smoke.png" alt="Smoking" />
            </div>
            <div className={styles.ruleContent}>
              <span className={styles.ruleTitle}>Smoking</span>
              <span className={styles.ruleDescription}>
                Smoking is not permitted
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Damage and Incidentals */}
      <div className={styles.damagePart}>
        <h2 className={styles.credentialHeading}>Damage and incidentals</h2>
        <p>
          You will be responsible for any damage to the rental property caused
          by you or your party during your stay.
        </p>
      </div>

      {/* Cancellation */}
      <div className={styles.cancellationPart}>
        <h2 className={styles.credentialHeading}>Cancellation</h2>
        <div className={styles.timelineContainer}>
          <div className={styles.line}></div>
          <div className={`${styles.circle} ${styles.today}`}>
            <span className={`${styles.label} ${styles.today}`}>Today</span>
          </div>
          <div className={`${styles.circle} ${styles.middle}`}>
            <span className={`${styles.label} ${styles.middle}`}>Nov 4</span>
          </div>
          <div className={`${styles.circle} ${styles.checkin}`}>
            <span className={`${styles.label} ${styles.checkin}`}>
              Check-in
            </span>
          </div>
        </div>
        <div className={styles.refundInfo}>
          <div className={styles.refundDetail}>
            <strong>Before Nov 4</strong>
            <div>
              <h3>Full refund</h3>
              <p>
                Cancel your reservation before Nov 4 at 11:59 PM, and you'll get
                a full refund. Times are based on the property's local time.
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.refundDetail}>
            <strong>After Nov 4</strong>
            <div>
              <h3>No refund</h3>
              <p>After that, you won't get a refund.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className={styles.importantInformation}>
        <h2 className={styles.credentialHeading}>Important information</h2>
        <div className={styles.info}>
          <h3>You need to know</h3>
          <ul>
            <li>
              Extra-person charges may apply and vary depending on property
              policy
            </li>
            <li>
              Government-issued photo identification and a credit card, debit
              card, or cash deposit may be required at check-in for incidental
              charges
            </li>
            <li>
              Special requests are subject to availability upon check-in and may
              incur additional charges; special requests cannot be guaranteed
            </li>
            <li>Onsite parties or group events are strictly prohibited</li>
            <li>
              Host has indicated there is a carbon monoxide detector on the
              property
            </li>
            <li>
              Host has indicated there is a smoke detector on the property
            </li>
            <li>
              Safety features at this property include a fire extinguisher and a
              first aid kit
            </li>
          </ul>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className={styles.frequentlyQuestions}>
        <h2 className={styles.credentialHeading}>Frequently asked questions</h2>
        <div className={styles.faq}>
          <div className={styles.faqItem}>
            <button>
              Is Juneau Vacation Home: Stunning View + Beach Access
              pet-friendly?
            </button>
          </div>
          <div className={styles.faqItem}>
            <button>
              What time is check-in at Juneau Vacation Home: Stunning View +
              Beach Access?
            </button>
          </div>
          <div className={styles.faqItem}>
            <button>
              What time is check-out at Juneau Vacation Home: Stunning View +
              Beach Access?
            </button>
          </div>
          <div className={styles.faqItem}>
            <button>
              Where is Juneau Vacation Home: Stunning View + Beach Access
              located?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseRules;
