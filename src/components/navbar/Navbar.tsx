import React from "react";
import styles from "./navbar.module.css";
import LOGO from "../../assets/logo.png";
import { Link } from "react-scroll";
import Message from "../../assets/chat.png";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={LOGO} alt="devLogo" className={styles.logo} />
      <div className={styles.desktopMenu}>
        <Link className={styles.desktopMenuListItem} to="#">
          Home
        </Link>
        <Link className={styles.desktopMenuListItem} to="#">
          About
        </Link>
        <Link className={styles.desktopMenuListItem} to="#">
          Projects
        </Link>
        <Link className={styles.desktopMenuListItem} to="#">
          Contact
        </Link>
      </div>
      <button className={styles.desktopMenuBtn}>
        {" "}
        <img src={Message} alt="" className={styles.contactImg} />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
