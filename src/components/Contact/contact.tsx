import styles from "./contact.module.css";
import EmailIcon from "../../assets/email.png";
import { Email } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactHeader}>
        <h3>Contact Me</h3>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactBtn}>
          <Email />
          <span className={styles.contactIdentity}>
            Saleemfero8143@gmail.com
          </span>
        </div>
        <div className={styles.contactBtn}>
          <Call />
          <span className={styles.contactIdentity}>+919611890978</span>
        </div>
        <div className={styles.contactBtn}>
          <LinkedIn />{" "}
          <span className={styles.contactIdentity}>SaleemFerozabad</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
