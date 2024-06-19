import styles from "./contact.module.css";
import EmailIcon from "../../assets/email.png";
import { Email } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:saleemfero8143@gmail.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919611890978";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/saleem-ferozabad", "_blank");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactHeader}>
        <h3>Contact Me</h3>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactBtn} onClick={handleEmailClick}>
          <Email />
          <span className={styles.contactIdentity}>
            saleemfero8143@gmail.com
          </span>
        </div>
        <div className={styles.contactBtn} onClick={handleCallClick}>
          <Call />
          <span className={styles.contactIdentity}>+919611890978</span>
        </div>
        <div className={styles.contactBtn} onClick={handleLinkedInClick}>
          <LinkedIn />{" "}
          <span className={styles.contactIdentity}>SaleemFerozabad</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
