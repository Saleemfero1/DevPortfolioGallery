import { CopyrightOutlined } from "@mui/icons-material";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>
        Copyright{" "}
        <CopyrightOutlined style={{ height: "15px", width: "15px" }} />
        2024; Designed By <span className={styles.dev}>SALEEM</span>
      </span>
    </div>
  );
};

export default Footer;
